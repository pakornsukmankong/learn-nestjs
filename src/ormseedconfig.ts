import { DataSource } from 'typeorm';
import ormconfig from './ormconfig';

const ormseedconfig = {
  ...ormconfig.options,
  migrations: ['src/seeds/*.ts'],
};

const dataSource = new DataSource(ormseedconfig);

export default dataSource;
