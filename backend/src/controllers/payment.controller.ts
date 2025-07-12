import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import payments from '../models/payment.model';
import carts from '../models/cart.model';
import { IPayment } from '../models/payment.model';

const paymentsHistory = async (req: Request, res: Response) => {
  try {
    const history = await payments.find({ email: req.params.email });
    res.status(200).json(history);
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

const createPayments = async (req: Request, res: Response) => {
  try {
    const paymentInfo = new payments({
      id: uuidv4(),
      email: req.body.email,
      totalPrice: Number(req.body.totalPrice),
      transactionId: req.body.transactionId,
      cartId: req.body.cartId,
      menuItemId: req.body.menuItemId,
      status: req.body.status,
    });
    await paymentInfo.save();
    const query = { id: { $in: req.body.cartId } };
    const removeCart = await carts.deleteMany(query);
    res.status(201).json({ paymentInfo, removeCart });
  } catch (error) {
    res.status(500).send((error as Error).message);
  }
};

export { paymentsHistory, createPayments }; 