import { Express } from "express";
import { growdeverRoutes } from "../../app/features/growdever/routes/growdever.routes";

export const makeRoutes = (app: Express) => {
    app.use('/growdever', growdeverRoutes)
}