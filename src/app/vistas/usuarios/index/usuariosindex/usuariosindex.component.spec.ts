import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosindexComponent } from './usuariosindex.component';

describe('UsuariosindexComponent', () => {
  let component: UsuariosindexComponent;
  let fixture: ComponentFixture<UsuariosindexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuariosindexComponent]
    });
    fixture = TestBed.createComponent(UsuariosindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
