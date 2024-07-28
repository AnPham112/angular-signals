import { Component, computed, effect, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Vehicles';
  private cartService = inject(CartService);

  constructor() {
    effect(() => console.log('hello', this.cartService.cartItems()));
    effect(() => console.log('hello', this.cartCount()));
  }

  cartCount = computed(() =>
    this.cartService.cartItems().reduce((acc, item) => acc + item.quantity, 0)
  );
}
