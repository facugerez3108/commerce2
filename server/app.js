import morgan from 'morgan'
import express from 'express'
import cors from 'cors'

const app = express()


//Middlewares
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000', 'hhtp://127.0.0.1:3000'],
    credentials: true,
    exposedHeaders: ['Authorization', 'Set-Cookie']
}))
app.use(morgan('dev'))



// Error Handler
app.use((err, req, res, next) => {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  });

export default app;