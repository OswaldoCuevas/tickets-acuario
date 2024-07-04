import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPatrocinadorComponent } from './formulario-patrocinador.component';

describe('FormularioPatrocinadorComponent', () => {
  let component: FormularioPatrocinadorComponent;
  let fixture: ComponentFixture<FormularioPatrocinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPatrocinadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPatrocinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
