import { computed, Injectable, signal } from '@angular/core';
import { CartItem } from '../models/cart';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<CartItem[]>([]);

  subTotal = computed(() =>
    this.cartItems().reduce(
      (acc, item) => acc + item.quantity * Number(item.vehicle.cost_in_credits),
      0
    )
  );

  // Delivery is free if spending more than 100,000 credits
  deliveryFee = computed(() => (this.subTotal() < 100000 ? 999 : 0));

  // Tax could be based on shipping address zip code
  tax = computed(() => Math.round(this.subTotal() * 10.75) / 100);

  totalPrice = computed(
    () => this.subTotal() + this.deliveryFee() + this.tax()
  );

  addToCart(vehicle: Vehicle): void {
    const index = this.cartItems().findIndex(
      (item) => item.vehicle.name === vehicle.name
    );
    if (index === -1) {
      // Not already in the cart, so add with default quantity of 1
      this.cartItems.update((items) => [...items, { vehicle, quantity: 1 }]);
    } else {
      // Already in the cart, so increase the quantity by 1
      this.cartItems.update((items) => [
        ...items.slice(0, index),
        { ...items[index], quantity: items[index].quantity + 1 },
        ...items.slice(index + 1),
      ]);
    }
  }

  updateInCart(cartItem: CartItem, quantity: number) {
    this.cartItems.update((items) =>
      items.map((item) =>
        item.vehicle.name === cartItem.vehicle.name
          ? { vehicle: cartItem.vehicle, quantity }
          : item
      )
    );
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartItems.update((items) =>
      items.filter((item) => item.vehicle.name !== cartItem.vehicle.name)
    );
  }
}
