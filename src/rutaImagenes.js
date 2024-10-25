import { Router } from 'express'
import pool from '../db.js'

const router = Router();

router.get('/imagenes', async (req, res) => {
    try {

        const conexion = await pool()

        // Realizar la consulta usando la conexión
        const resultado = await conexion.request().query('SELECT * FROM imagenes');

        res.json(resultado.recordset);
    }
    catch (err) {
        res.status(500).json({ mensaje: err.message });
    }
});

export default router;
