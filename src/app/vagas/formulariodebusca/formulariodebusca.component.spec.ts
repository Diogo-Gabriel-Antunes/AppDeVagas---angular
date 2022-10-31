import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariodebuscaComponent } from './formulariodebusca.component';

describe('FormulariodebuscaComponent', () => {
  let component: FormulariodebuscaComponent;
  let fixture: ComponentFixture<FormulariodebuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariodebuscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariodebuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
