import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import carts from '../models/cart.model';
import { ICart } from '../models/cart.model';

const getCarts = async (req: Request, res: Response) => {
  try {
    const email = req.query.userEmail as string;
    const query = { userEmail: email };
    const result = await carts.find(query);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

const createCart = async (req: Request, res: Response) => {
  try {
    const { userEmail, foodName, foodImg, foodCategory, price, menuItemId } =
      req.body;
    const cartItem = new carts({
      id: uuidv4(),
      itemId: menuItemId,
      userEmail: userEmail,
      foodName: foodName,
      foodImg: foodImg,
      foodCategory: foodCategory,
      price: Number(price),
    });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

const deleteCartById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await carts.deleteOne({ id: id });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

export { getCarts, createCart, deleteCartById }; 