import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactviewformComponent } from './contactviewform.component';

describe('ContactviewformComponent', () => {
  let component: ContactviewformComponent;
  let fixture: ComponentFixture<ContactviewformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactviewformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactviewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
