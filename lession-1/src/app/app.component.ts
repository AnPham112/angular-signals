import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'lession-1';
  quantity = signal(1);
  qtyAvailable = signal<number[]>([1, 2, 3, 4, 5, 6]);
  vehicles = signal<Vehicle[]>([]);
  selectedVehicle = signal<Vehicle>({ id: 1, name: 'AT-AT', price: 10000 });
  exPrice = computed(() => this.selectedVehicle().price * this.quantity());

  constructor() {
    console.log(this.quantity());
    this.quantity.update((qty) => qty * 2);
    this.selectedVehicle.update((v) => ({
      ...v,
      price: v.price + v.price * 0.2,
    }));
  }

  onQuantitySelected(event: any) {
    const quantity = Number((event.target as HTMLSelectElement).value);
    this.quantity.set(quantity);
  }
}

export interface Vehicle {
  id: number;
  name: string;
  price: number;
}
