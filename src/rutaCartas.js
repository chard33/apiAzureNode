import { Router } from 'express'
import pool, { sql } from '../db.js'

const router = Router();

router.get('/cartas', async (req, res) => {
    try {

        const conexion = await pool()

        const resultado = await conexion.query('SELECT * FROM cartas');

        res.json(resultado.recordset);
    }
    catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
});

router.post('/cartas', async (req, res) => {
    try {
        const { titulo, precio, imagen } = req.body;

        const conexion = await pool()

        const resultado = await conexion
            .request()
            .input('titulo', sql.NVarChar, titulo)
            .input('precio', sql.Float, precio)
            .input('imagen', sql.NVarChar, imagen)
            .query('INSERT INTO cartas (titulo, precio, imagen) OUTPUT INSERTED.id VALUES (@titulo, @precio, @imagen)');

        res.json({ "ID CARTA: ": resultado.recordset[0].id })
    }
    catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
});

router.delete('/cartas/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const conexion = await pool()

        const resultado = await conexion
            .request()
            .input('id', id)
            .query('DELETE FROM cartas OUTPUT DELETED.id WHERE id = @id');

        res.json({ "ID CARTA: ": resultado.recordset[0].id })
    }
    catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
});

export default router;