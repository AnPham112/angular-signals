import { Component, computed, inject } from '@angular/core';
import { VehicleService } from '../../../../services/vehicle.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css',
})
export class VehicleListComponent {
  title = 'Vehicles';
  vehicleService = inject(VehicleService);
  errorMessage = '';

  // selectors
  vehicles = computed(() => {
    try {
      return this.vehicleService.vehicles();
    } catch (error) {
      this.errorMessage = typeof error === 'string' ? error : 'Error';
      return [];
    }
  });
  // vehicles = this.vehicleService.vehicles;
  selectedVehicle = this.vehicleService.selectedVehicle;

  onSelected(vehicleName: string): void {
    this.vehicleService.vehicleSelected(vehicleName);
  }
}
