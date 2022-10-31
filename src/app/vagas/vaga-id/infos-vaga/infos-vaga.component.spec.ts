import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosVagaComponent } from './infos-vaga.component';

describe('InfosVagaComponent', () => {
  let component: InfosVagaComponent;
  let fixture: ComponentFixture<InfosVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosVagaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfosVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
