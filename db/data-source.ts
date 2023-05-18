import { DataSource } from "typeorm";
import { getConfig } from "./ds.config";


const datasource = new DataSource(getConfig()); // config is one that is defined in datasource.config.ts file
datasource.initialize();
export default datasource;