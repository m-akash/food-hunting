import dotenv from 'dotenv';

dotenv.config();

interface JWTConfig {
  jwtSecret: string | undefined;
  jwtExpire: string;
}

const JWT: JWTConfig = {
  jwtSecret: process.env.ACCESS_TOKEN_SECRET,
  jwtExpire: "1h",
};

export default JWT; 