import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioseditarComponent } from './usuarioseditar.component';

describe('UsuarioseditarComponent', () => {
  let component: UsuarioseditarComponent;
  let fixture: ComponentFixture<UsuarioseditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioseditarComponent]
    });
    fixture = TestBed.createComponent(UsuarioseditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
