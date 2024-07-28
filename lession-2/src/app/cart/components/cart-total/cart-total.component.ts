import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-cart-total',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-total.component.html',
  styleUrl: './cart-total.component.css',
})
export class CartTotalComponent {
  cartService = inject(CartService);

  cartItems = this.cartService.cartItems;

  subTotal = this.cartService.subTotal;

  deliveryFee = this.cartService.deliveryFee;

  tax = this.cartService.tax;

  totalPrice = this.cartService.totalPrice;
}
