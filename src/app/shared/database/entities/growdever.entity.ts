import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'growdever'})
export class GrowdeverEntity {
    @PrimaryColumn({ name: 'uuid' })
    id!: string;

    @Column()
    nome!: string;

    @Column()
    email!: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt!: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt!: Date | null;
}