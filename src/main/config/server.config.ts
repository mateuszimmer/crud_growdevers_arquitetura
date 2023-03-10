import cors from 'cors';
import express from 'express';

export const createServer = () => {
    const app = express();
    
    // Configurar cors
    app.use(cors());
    // Configurar o JSON no body do post
    app.use(express.json())

    return app;
}