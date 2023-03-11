import { Router } from "express";
import { GrowdeverController } from "../controllers/growdever.controller";
import { createGrowdeverValidadtor } from "../validators/create-growdever.validator";

const growdeverRoutes = Router();

growdeverRoutes.post('/',
    [createGrowdeverValidadtor],
    new GrowdeverController().create
);

export { growdeverRoutes }