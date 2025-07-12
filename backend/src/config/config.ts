import dotenv from 'dotenv';

dotenv.config();

interface AppConfig {
  app: {
    port: string | number;
  };
  db: {
    url: string | undefined;
  };
}

const dev: AppConfig = {
  app: {
    port: process.env.PORT || 3000,
  },
  db: {
    url: process.env.DB_URL,
  },
};

export default dev; 