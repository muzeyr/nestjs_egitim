import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductImageUrl1684407114707 implements MigrationInterface {
    name = 'ProductImageUrl1684407114707'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`description\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`imageUrl\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`imageUrl\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`description\``);
    }

}
