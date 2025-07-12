import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import users from '../models/users.model';
import { IUser } from '../models/users.model';

const saltRounds = 10;

interface AuthenticatedRequest extends Request {
  decoded?: {
    email: string;
    [key: string]: any;
  };
}

const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await users.find();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const existing = await users.findOne({ email: req.body.email });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }
    return bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
      if (err) {
        return res.status(500).json({ message: "Error hashing password" });
      }
      const newUser = new users({
        id: uuidv4(),
        name: req.body.name,
        email: req.body.email,
        password: hash,
        lastLogin: new Date(),
      });
      await newUser.save();
      return res.status(201).json(newUser);
    });
  } catch (error) {
    return res.status(500).send((error as Error).message);
  }
};

const socialLogin = async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;
    const user = await users.findOne({ email: email });
    if (user) {
      user.lastLogin = new Date();
      await user.save();
      res.status(200).json({ message: "Login successful", user });
    } else {
      const newUser = new users({
        id: uuidv4(),
        name: name,
        email: email,
        password: undefined,
        lastLogin: new Date(),
      });
      await newUser.save();
      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    }
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await users.findOne({ email: email });
    if (user && user.password) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          res.status(200).json({ status: "Valid User" });
        } else {
          res.status(404).json({ status: "Not a valid user" });
        }
      });
    } else {
      res.status(404).json({ status: "Not a valid user" });
    }
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

const makeAdmin = async (req: Request, res: Response) => {
  try {
    const user = await users.findOne({ id: req.params.id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const updatedDoc = {
      $set: {
        role: "admin",
      },
    };
    const result = await users.updateOne({ id: req.params.id }, updatedDoc);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).send((error as Error).message);
  }
};

const checkAdmin = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const email = req.params.email;
    if (email !== req.decoded?.email) {
      return res.status(403).send({ message: "forbidden access" });
    }
    const user = await users.findOne({ email: email });
    let admin = false;
    if (user) {
      admin = user?.role === "admin";
    }
    return res.status(200).send({ admin });
  } catch (error) {
    return res.status(500).send((error as Error).message);
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const email = req.params.email;
    const user = await users.deleteOne({ email: email });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

export {
  getUsers,
  createUser,
  loginUser,
  makeAdmin,
  deleteUser,
  socialLogin,
  checkAdmin,
}; 