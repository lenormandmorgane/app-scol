import { Component } from '@angular/core';
import { SpecServiceService } from '../../service/spec-service.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrl: './specialite.component.css'
})
export class SpecialiteComponent {
  specialite: any = [];
  constructor(private specialites: SpecServiceService ){
    this.specialite = this.specialites.specialite
  }

}
