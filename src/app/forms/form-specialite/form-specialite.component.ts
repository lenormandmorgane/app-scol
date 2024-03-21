import { Component } from '@angular/core';

@Component({
  selector: 'app-form-specialite',
  templateUrl: './form-specialite.component.html',
  styles: ``
})
export class FormSpecialiteComponent {
  specialite : any ={};

  save(){
    localStorage.setItem('specialite', JSON.stringify(this.specialite));
  }
}
