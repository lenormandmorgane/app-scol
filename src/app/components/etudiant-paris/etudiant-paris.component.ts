import { Component } from '@angular/core';
import { EtudiantServiceService } from '../../service/etudiant-service.service';

@Component({
  selector: 'app-etudiant-paris',
  templateUrl: './etudiant-paris.component.html',
  styleUrl: './etudiant-paris.component.css'
})
export class EtudiantParisComponent {
  etudiant: any = [];
  constructor(private etudiants: EtudiantServiceService) {
    this.etudiant = this.etudiants.etudiant
  
  }

}
