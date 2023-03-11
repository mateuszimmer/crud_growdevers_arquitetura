import { Growdever } from "../../../models/growdever.model";
import { GrowdeverRepository } from "../repositories/growdever.repository";

interface CreateGroedeverDTO {
    nome: string;
    email: string;
}

export class CreateGrowdeverUseCase {
    constructor(private _repository: GrowdeverRepository) {}

    public async execute(data: CreateGroedeverDTO): Promise<Growdever> {
        const growdever = Growdever.create(data.nome, data.email);
        return await this._repository.create(growdever);
    }
}