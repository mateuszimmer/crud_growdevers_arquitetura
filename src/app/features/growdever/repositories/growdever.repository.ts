import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import { Growdever } from "../../../models/growdever.model";
import { GrowdeverEntity } from "../../../shared/database/entities/growdever.entity";

export class GrowdeverRepository {
    private _repository = DatabaseConnection.connection.getRepository(GrowdeverEntity);

    private _mapToModel(entity: GrowdeverEntity): Growdever {
        return Growdever.create( entity.nome, entity.email, entity.uuid );
    }

    private _mapToModelAll(entities: GrowdeverEntity[]): Growdever[] {
        const result = entities.map(entity => Growdever.create(entity.nome, entity.email, entity.uuid));
        return result;
    }

    public async create(growdever: Growdever): Promise<Growdever> {
        const growdeverEntity = this._repository.create({
            uuid: growdever.uuid,
            nome: growdever.nome,
            email: growdever.email,
        });

        const result = await this._repository.save(growdeverEntity);

        return this._mapToModel(result)
    }

    public async list(): Promise<Growdever[]> {
        const result = await this._repository.find();
        const growdevers = this._mapToModelAll(result);
        return growdevers;
    }
}