import { Component } from '@angular/core';
import { EtudiantServiceService } from '../../service/etudiant-service.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent {
  etudiant: any = [];
  constructor(private etudiants: EtudiantServiceService) {
    this.etudiant = this.etudiants.etudiant


  }

}
