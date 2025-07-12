import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import foodMenu from '../models/menu.model';
import { IMenu } from '../models/menu.model';

const getMenu = async (req: Request, res: Response) => {
  try {
    const result = await foodMenu.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

const getMenuItemById = async (req: Request, res: Response) => {
  try {
    const item = await foodMenu.findOne({ id: req.params.id });
    res.status(200).json(item);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

const createMenu = async (req: Request, res: Response) => {
  try {
    const newMenu = new foodMenu({
      id: uuidv4(),
      name: req.body.name,
      desc: req.body.desc,
      image: req.body.image,
      category: req.body.category,
      price: Number(req.body.price),
      recipe: req.body.recipe,
    });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

const updateMenuItem = async (req: Request, res: Response) => {
  try {
    const foodId = await foodMenu.findOne({ id: req.params.id });
    if (!foodId) {
      return res.status(404).json({ message: "Food not found!" });
    }
    const updateItem = {
      $set: {
        name: req.body.name,
        desc: req.body.desc,
        image: req.body.image,
        category: req.body.category,
        price: Number(req.body.price),
        recipe: req.body.recipe,
      },
    };
    const result = await foodMenu.updateOne({ id: req.params.id }, updateItem);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).send((error as Error).message);
  }
};

const deleteMenuItem = async (req: Request, res: Response) => {
  try {
    const item = await foodMenu.findOne({ id: req.params.id });
    if (!item) {
      return res.status(404).json({ message: "Item not found!" });
    }
    const deleteItem = await foodMenu.deleteOne({ id: req.params.id });
    return res.status(200).json(deleteItem);
  } catch (error) {
    return res.status(500).send((error as Error).message);
  }
};

export {
  getMenu,
  createMenu,
  deleteMenuItem,
  getMenuItemById,
  updateMenuItem,
}; 