import { Component, OnInit } from '@angular/core';
import { RegistersaveService } from '../../registersave.service';

@Component({
  selector: 'app-admin-registered',
  templateUrl: './admin-registered.component.html',
  styleUrls: ['./admin-registered.component.css']
})
export class AdminRegisteredComponent {

  registrations$;

  constructor(private register:RegistersaveService) { 

    this.registrations$=register.getAll();
  }
}
