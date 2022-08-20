export enum enumOrderStatus {
  initiated = 'initiated',
  sentToProduction = 'sentToProduction',
  concluded = 'concluded',
}

export interface Order {
  id: string;
  clientsName?: string;
  totalPrice: number;
  status: enumOrderStatus;
  createdAt?: string;
  updatedAt?: string;
}
