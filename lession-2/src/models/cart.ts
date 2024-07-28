import { Vehicle } from './vehicle';

export interface Cart {
  cartItems: CartItem[];
}

export interface CartItem {
  vehicle: Vehicle;
  quantity: number;
}
