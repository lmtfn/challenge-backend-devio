import { Request, Response } from 'express';
import ProductsService from './productsService';

const ProductsController = {
  async getProductsList(req: Request, res: Response) {
    try {
      const data = await ProductsService.getProductsList();
      res.status(200);
      res.json(data);
    } catch (err: any) {
      res.status(400);
      res.json({ message: err.message });
    }
  },
};

export default ProductsController;
