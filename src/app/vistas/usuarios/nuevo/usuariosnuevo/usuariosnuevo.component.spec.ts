import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosnuevoComponent } from './usuariosnuevo.component';

describe('UsuariosnuevoComponent', () => {
  let component: UsuariosnuevoComponent;
  let fixture: ComponentFixture<UsuariosnuevoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosnuevoComponent]
    });
    fixture = TestBed.createComponent(UsuariosnuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
