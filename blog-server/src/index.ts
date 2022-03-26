import * as dotenv from 'dotenv';
dotenv.config();
import { createConnection, DataSourceOptions } from 'typeorm';
import express from 'express';
import routes from './routes/routes';
import cors from 'cors';
import { DB_CONFIG } from './config/APP_CONFIG';
const main = async () => {
  try {
    await createConnection(DB_CONFIG as DataSourceOptions);
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(routes);
    app.listen(process.env.APP_PORT, () => {
      console.log(`App listening on port ${process.env.APP_PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect DB', error);
  }
};

main();
