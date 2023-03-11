import { Growdever } from "../../../models/growdever.model";
import { GrowdeverRepository } from "../repositories/growdever.repository";

export class ListGrowdeversUseCase {
    constructor (private _repository: GrowdeverRepository) {}

    public async execute(): Promise<Growdever[]> {
        const result = await this._repository.list();
        return result;
    }
}