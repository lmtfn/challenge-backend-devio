export enum enumOrderStatus {
  initiated = 'initiated',
  sentToProduction = 'sentToProduction',
  concluded = 'concluded',
  cancelled = 'cancelled',
}

export interface Order {
  id: string;
  clientsName?: string;
  totalPrice: number;
  status: enumOrderStatus;
  createdAt?: string;
  updatedAt?: string;
}
