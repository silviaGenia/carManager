import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from './entity/Car';
import { config } from 'dotenv';
config();

export const dbConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [Car],
  synchronize: true,
  /*type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'nico',
  password: 'admin123',
  database: 'my_store',
  entities: [Car],
  synchronize: true,*/
});
