import * as mysqlDriver from 'mysql2';
import { DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export function getConfig() {
    return {
        type: 'mysql',
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_HOST),
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        entities: ['dist/**/*.entity.js', 'dist/**/*.entity.ts'],
        migrations: ['dist/**/*.migration.{ts,js}'],


    } as DataSourceOptions;
}
