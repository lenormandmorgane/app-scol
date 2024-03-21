import { NgModule } from '@angular/core';
import { BrowserModule } from  '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { SpecialiteComponent } from './components/specialite/specialite.component';
import { EtudiantParisComponent } from './components/etudiant-paris/etudiant-paris.component';
import { EtudiantHorsparisComponent } from './components/etudiant-horsparis/etudiant-horsparis.component';
import { FormSpecialiteComponent } from './forms/form-specialite/form-specialite.component';
import { FormEtudiantComponent } from './forms/form-etudiant/form-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EtudiantComponent,
    SpecialiteComponent,
    EtudiantParisComponent,
    EtudiantHorsparisComponent,
    FormSpecialiteComponent,
    FormEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
