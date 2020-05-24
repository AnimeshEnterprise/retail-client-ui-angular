import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceviewformComponent } from './invoiceviewform.component';

describe('InvoiceviewformComponent', () => {
  let component: InvoiceviewformComponent;
  let fixture: ComponentFixture<InvoiceviewformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceviewformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceviewformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
