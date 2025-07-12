import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import contact from '../models/contact.model';
import { IContact } from '../models/contact.model';

const getMessage = async (req: Request, res: Response) => {
  try {
    const message = await contact.find();
    res.status(200).send(message);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

const addMessage = async (req: Request, res: Response) => {
  try {
    const newMessage = new contact({
      id: uuidv4(),
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

export { getMessage, addMessage }; 