import { Component } from '@angular/core';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [VehicleListComponent, VehicleDetailComponent],
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css',
})
export class VehiclesComponent {}
