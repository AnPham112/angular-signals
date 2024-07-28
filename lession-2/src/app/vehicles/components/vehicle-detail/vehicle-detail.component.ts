import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { VehicleService } from '../../../../services/vehicle.service';
import { Vehicle } from '../../../../models/vehicle';
import { CartService } from '../../../../services/cart.service';

@Component({
  selector: 'app-vehicle-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-detail.component.html',
  styleUrl: './vehicle-detail.component.css',
})
export class VehicleDetailComponent {
  private vehicleService = inject(VehicleService);
  private cartService = inject(CartService);

  selectedVehicle = this.vehicleService.selectedVehicle;

  title = computed(() => {
    this.selectedVehicle() ? `Detail for: ${this.selectedVehicle()?.name}` : '';
  });

  addToCart(vehicle: Vehicle | undefined) {
    if (vehicle) {
      this.cartService.addToCart(vehicle);
    }
  }
}
