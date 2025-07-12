import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import reviews from '../models/reviews.model';
import { IReview } from '../models/reviews.model';

const getReview = async (req: Request, res: Response) => {
  try {
    const review = await reviews.find();
    res.status(200).json(review);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

const addReview = async (req: Request, res: Response) => {
  try {
    const newReview = new reviews({
      id: uuidv4(),
      name: req.body.name,
      details: req.body.details,
      rating: Number(req.body.rating),
    });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

export { getReview, addReview }; 