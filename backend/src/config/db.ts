import mongoose from 'mongoose';
import config from './config';

const dbURL = config.db.url;

if (!dbURL) {
  console.error('Database URL is not defined in environment variables');
  process.exit(1);
}

mongoose
  .connect(dbURL)
  .then(() => {
    console.log("mongodb is connected!");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  }); 