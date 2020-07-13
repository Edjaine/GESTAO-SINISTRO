import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOcorrenciaComponent } from './form-ocorrencia.component';

describe('FormOcorrenciaComponent', () => {
  let component: FormOcorrenciaComponent;
  let fixture: ComponentFixture<FormOcorrenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOcorrenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOcorrenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
