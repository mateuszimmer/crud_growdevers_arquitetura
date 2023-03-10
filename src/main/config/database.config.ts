import { DataSource } from "typeorm";
import 'dotenv/config';
import { CreateTableGrowdever1678447723684 } from "../../app/shared/database/migrations/1678447723684-CreateTableGrowdever";
import { GrowdeverEntity } from "../../app/shared/database/entities/growdever.entity";

export default new DataSource({
    type: 'postgres',
    url: process.env.DB_URL,
    synchronize: false,
    entities: [
        GrowdeverEntity
    ],
    migrations: [
        CreateTableGrowdever1678447723684
    ]
})