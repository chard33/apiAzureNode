import dotenv from 'dotenv'

dotenv.config()
  
  export default {
    user: process.env.USUARIO,
    password: process.env.CONTRASENA,
    database: process.env.BASEDATOS,
    server: process.env.SERVIDOR,
    port: Number(process.env.PUERTO),
    parseJSON: true,
    pool: {
        max: Number(process.env.MAXCON),
        min: Number(process.env.MINCON),
        idleTimeoutMillis: Number(process.env.TIEMPO) 
    },
    options: {
        encrypt: Boolean(process.env.ENCRIPTACION),
        trustServerCertificate: Boolean(process.env.CERTIFICADO)
    }
}

