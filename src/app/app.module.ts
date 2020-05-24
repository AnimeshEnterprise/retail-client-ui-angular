import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvoicelistComponent } from './components/invoice/invoiceList/invoicelist.component';
import { InvoiceService } from './service/invoice/invoice.service';
import { ProductService } from './service/product/product.service';
import { ContactService } from './service/contact/contact.service';
import { InvoiceformComponent } from './components/invoice/invoiceForm/invoiceform.component';
import { InvoiceviewformComponent } from './components/invoice/invoiceviewform/invoiceviewform.component';
import { ProductlistComponent } from './components/product/productlist/productlist.component';
import { ContactlistComponent } from './components/contact/contactlist/contactlist.component';
import { ContactformComponent } from './components/contact/contactform/contactform.component';
import { ContactviewformComponent } from './components/contact/contactviewform/contactviewform.component';
import { UnitlistComponent } from './components/unit/unitlist/unitlist.component';


@NgModule({
  declarations: [
    AppComponent,
    InvoicelistComponent,
    InvoiceformComponent,
    InvoiceviewformComponent,
    ProductlistComponent,
    ContactlistComponent,
    ContactformComponent,
    ContactviewformComponent,
    UnitlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [InvoiceService, ProductService, ContactService, { provide: APP_BASE_HREF, useValue: '/retailapp' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
