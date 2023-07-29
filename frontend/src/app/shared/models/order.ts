import { CartItem } from "./cartItem";

export class Order{
  id!:number;
  items!: CartItem[];
  totalItems!:number;
  totalPrice!:number;
  name!: string;
  address!: string;
  paymentId!: string;
  createdAt!: string;
  status!: string;
}