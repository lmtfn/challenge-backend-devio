import { Product } from '../products/productEntity';
import { Order } from '../orders/orderEntity';

export interface OrderProduct {
  id: string;
  productId: string;
  product?: Product;
  orderId: string;
  order?: Order;
  amount: number;
  partialPrice: number;
  observation?: string;
  createdAt?: string;
  updatedAt?: string;
}
