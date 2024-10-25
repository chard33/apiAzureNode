import express from 'express'
import cors from 'cors'
import rutasImg from './src/rutaImagenes.js'
import rutasCartas from './src/rutaCartas.js'

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

const corsOptions = {
    origin: '*',  // Permitir todos los orígenes
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],  // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],  // Headers permitidos
    credentials: true,  // Permitir envío de cookies o credenciales
    maxAge: 3600  // Tiempo en segundos que se cachea la respuesta preflight
};

app.use(cors(corsOptions));

app.use(express.json());

//Routes
app.get('/', (req, res) => {
    res.send('index')
})

app.use(rutasImg)

app.use(rutasCartas)


//Run Server
app.listen(app.get('port'), () =>
    console.log('Iniciando en el puerto:', app.get('port')));

