import { Client } from '../clients/clientEntity';

export interface Order {
  id: string;
  clientId: string;
  client?: Client;
  totalPrice: number;
  createdAt?: string;
  updatedAt?: string;
}
