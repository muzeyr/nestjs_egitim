import { MigrationInterface, QueryRunner } from "typeorm";

export class Product1684406347542 implements MigrationInterface {
    name = 'Product1684406347542'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`description\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`description\``);
    }

}
