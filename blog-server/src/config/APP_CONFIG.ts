import { Cover } from '../entities/Cover';
import { Post } from '../entities/Post';
export const DB_CONFIG = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Cover, Post],
  synchronize: true, // false for production | use migrations
  logging: true,
};
