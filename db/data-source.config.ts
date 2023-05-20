 import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

 dotenv.config();

export function getConfig(){
    return {
        type: 'mysql',
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_HOST),
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        entities: ['dist/**/*.entity.js'],
        migrations: ['dist/db/migrations/*.js'],
    } as DataSourceOptions;
}