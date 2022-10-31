import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaSimilaresComponent } from './vaga-similares.component';

describe('VagaSimilaresComponent', () => {
  let component: VagaSimilaresComponent;
  let fixture: ComponentFixture<VagaSimilaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagaSimilaresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagaSimilaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
