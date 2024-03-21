import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantHorsparisComponent } from './etudiant-horsparis.component';

describe('EtudiantHorsparisComponent', () => {
  let component: EtudiantHorsparisComponent;
  let fixture: ComponentFixture<EtudiantHorsparisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EtudiantHorsparisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EtudiantHorsparisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
