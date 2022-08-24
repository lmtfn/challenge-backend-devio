import { Order } from '../orders/orderEntity';

export enum enumPaymentType {
  pix = 'pix',
  cash = 'cash',
  creditCard = 'creditCard',
  debitCard = 'debitCard',
}

export interface Payment {
  id: string;
  orderId: string;
  order?: Order;
  type: enumPaymentType;
  value: number;
  receiptNumber: string;
  createdAt?: string;
  updatedAt?: string;
}
