export interface Order {
  OrderCode: number;
  CustomerCode: number;
  ProductCode: number;
  QuantityOrdered: number;
  OrderDate: Date;
  RequiredDate: Date;
  ShippedDate: Date;
  Status: string;
}
