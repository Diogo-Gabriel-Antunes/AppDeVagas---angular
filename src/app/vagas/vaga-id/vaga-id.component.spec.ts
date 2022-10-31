import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaIdComponent } from './vaga-id.component';

describe('VagaIdComponent', () => {
  let component: VagaIdComponent;
  let fixture: ComponentFixture<VagaIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VagaIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VagaIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
