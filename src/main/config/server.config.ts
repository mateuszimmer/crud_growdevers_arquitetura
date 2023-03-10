import cors from 'cors';
import express from 'express';
import { makeRoutes } from './routes.config';

export const createServer = () => {
    const app = express();
    
    // Configurar cors
    app.use(cors());
    // Configurar o JSON no body do post
    app.use(express.json())

    // Aplicar rotas
    makeRoutes(app)

    return app;
}