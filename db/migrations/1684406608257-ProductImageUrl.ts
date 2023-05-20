import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductImageUrl1684406608257 implements MigrationInterface {
    name = 'ProductImageUrl1684406608257'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`imageUrl\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`imageUrl\``);
    }

}
