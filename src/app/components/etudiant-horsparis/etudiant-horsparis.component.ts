import { Component } from '@angular/core';
import { EtudiantServiceService } from '../../service/etudiant-service.service';

@Component({
  selector: 'app-etudiant-horsparis',
  templateUrl: './etudiant-horsparis.component.html',
  styleUrl: './etudiant-horsparis.component.css'
})
export class EtudiantHorsparisComponent {
  etudiant: any = [];
  constructor(private etudiants: EtudiantServiceService) {
    this.etudiant = this.etudiants.etudiant
}
}