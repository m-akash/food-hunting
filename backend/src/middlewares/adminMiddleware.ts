import { Request, Response, NextFunction } from 'express';
import users from '../models/users.model';
import { IUser } from '../models/users.model';

interface AuthenticatedRequest extends Request {
  decoded?: {
    email: string;
    [key: string]: any;
  };
}

const verifyAdmin = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const email = req.decoded?.email;
  if (!email) {
    return res.status(401).send({ message: "unauthorized access" });
  }
  
  const user = await users.findOne({ email: email });
  const isAdmin = user?.role === "admin";
  if (!isAdmin) {
    return res.status(403).send({ message: "forbidden access" });
  }
  return next();
};

export default verifyAdmin; 