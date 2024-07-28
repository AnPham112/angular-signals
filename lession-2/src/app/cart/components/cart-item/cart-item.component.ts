import { Component, computed, inject, Input, signal } from '@angular/core';
import { CartService } from '../../../../services/cart.service';
import { CartItem } from '../../../../models/cart';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css',
})
export class CartItemComponent {
  cartService = inject(CartService);

  // Use a setter to emit whenever a new item is set
  _item!: CartItem;
  get item(): CartItem {
    return this._item;
  }
  @Input() set item(item: CartItem) {
    this._item = item;
    this.cartItem.set(item);
  }

  // Hard-coded quantity
  // These could instead come from an inventory system
  qtyArr = signal([1, 2, 3, 4, 5, 6, 7, 8]);

  // Cart item signal
  cartItem = signal(this.item);

  // When the item changes, recalculate the extended price
  exPrice = computed(
    () =>
      this.cartItem().quantity * Number(this.cartItem().vehicle.cost_in_credits)
  );

  onQuantitySelected(quantity: number): void {
    // Update the quantity in the item
    this.cartService.updateInCart(this.cartItem(), Number(quantity));
  }

  onRemove(): void {
    this.cartService.removeFromCart(this.cartItem());
  }
}
