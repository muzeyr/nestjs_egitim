import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductImageUrl1684407209889 implements MigrationInterface {
    name = 'ProductImageUrl1684407209889'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`imageUrl\` \`imageUrl2\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`imageUrl2\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`imageUrl2\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`imageUrl2\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`imageUrl2\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` CHANGE \`imageUrl2\` \`imageUrl\` varchar(255) NOT NULL`);
    }

}
