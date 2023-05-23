import { DataSource } from 'typeorm';


export default new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  synchronize: true,
  entities: [],
  logging: ['query', 'error'],
});