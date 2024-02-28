import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioseliminarComponent } from './usuarioseliminar.component';

describe('UsuarioseliminarComponent', () => {
  let component: UsuarioseliminarComponent;
  let fixture: ComponentFixture<UsuarioseliminarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioseliminarComponent]
    });
    fixture = TestBed.createComponent(UsuarioseliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
