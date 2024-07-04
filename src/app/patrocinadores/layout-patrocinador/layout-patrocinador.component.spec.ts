import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPatrocinadorComponent } from './layout-patrocinador.component';

describe('LayoutPatrocinadorComponent', () => {
  let component: LayoutPatrocinadorComponent;
  let fixture: ComponentFixture<LayoutPatrocinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutPatrocinadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutPatrocinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
