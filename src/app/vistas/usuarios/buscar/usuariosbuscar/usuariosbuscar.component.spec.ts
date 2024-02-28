import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosbuscarComponent } from './usuariosbuscar.component';

describe('UsuariosbuscarComponent', () => {
  let component: UsuariosbuscarComponent;
  let fixture: ComponentFixture<UsuariosbuscarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosbuscarComponent]
    });
    fixture = TestBed.createComponent(UsuariosbuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
