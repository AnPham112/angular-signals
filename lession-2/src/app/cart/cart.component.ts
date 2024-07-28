import { Component } from '@angular/core';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartTotalComponent } from './components/cart-total/cart-total.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartListComponent, CartTotalComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {}
