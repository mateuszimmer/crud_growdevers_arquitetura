import { Request, Response, NextFunction } from "express";

export const createGrowdeverValidadtor = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { nome, email } = req.body
    
    if(!nome) {
        return res.status(400).send({
            ok: false,
            message: 'Nome não informado',
        })
    }

    if(!email) {
        return res.status(400).send({
            ok: false,
            message: 'Email não informado',
        })
    }

    return next()
}