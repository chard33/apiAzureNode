import sql from 'mssql';
import configSQL from "./src/config/configBD.js"

const pool = async () => {

  try {

    // Establecer conexión
    const conex = await new sql.ConnectionPool(configSQL).connect()
    console.log('Conexión exitosa a la base de datos.');
    return conex;  // Retornar la conexión para usarla en consultas

  } catch (error) {

    console.log('Error al conectar a la base de datos:', error.message);
    throw error;  // Lanzar el error para que pueda ser manejado externamente

  }
};

export default pool;
export { sql };