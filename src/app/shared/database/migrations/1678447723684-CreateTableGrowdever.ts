import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableGrowdever1678447723684 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'growdever',
                columns: [
                    {
                        name: 'uuid',
                        type: 'varchar',
                        isPrimary: true,
                        isNullable: false,
                        length: '36',
                        primaryKeyConstraintName: 'pk_growdever'
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '100',
                        isNullable: false,
                        isUnique: true,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        isNullable: false,
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        isNullable: true,
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('growdever', true, true, true)
    }

}
