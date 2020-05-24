import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicelistComponent } from './components/invoice/invoiceList/invoicelist.component';
import { InvoiceformComponent } from './components/invoice/invoiceForm/invoiceform.component';
import { InvoiceviewformComponent } from './components/invoice/invoiceviewform/invoiceviewform.component';
import { ProductlistComponent } from './components/product/productlist/productlist.component';
import { UnitlistComponent } from './components/unit/unitlist/unitlist.component';
import { ContactlistComponent } from './components/contact/contactlist/contactlist.component';
import { ContactformComponent } from './components/contact/contactform/contactform.component';
import { ContactviewformComponent } from './components/contact/contactviewform/contactviewform.component';

const routes: Routes = [
  { path: 'invoices', component: InvoicelistComponent },
  { path: 'createinvoice', component: InvoiceformComponent },
  { path: 'invoices/viewinvoice/:invoiceId', component: InvoiceviewformComponent },
  { path: 'invoices/editinvoice/:invoiceId', component: InvoiceformComponent },
  { path: 'invoices/viewinvoice/:invoiceId/editinvoice', component: InvoiceformComponent},
  { path: 'listproduct', component: ProductlistComponent},
  { path: 'listunit', component: UnitlistComponent},
  { path: 'listcontact', component: ContactlistComponent},
  { path: 'createcontact', component: ContactformComponent },
  { path: 'listcontact/viewcontact/:contactId', component: ContactviewformComponent },
  { path: 'listcontact/editcontact/:contactId', component: ContactformComponent },
  { path: 'listcontact/viewcontact/:contactId/editcontact', component: ContactformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
