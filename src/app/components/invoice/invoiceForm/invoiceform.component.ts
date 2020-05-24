import { Component, OnInit } from '@angular/core';
import { Invoice, InvoiceLine } from '../../../model/invoice/invoice.model';
import { Product } from '../../../model/product/product.model';
import { Unit } from '../../../model/unit/unit.model';
import { Contact } from '../../../model/contact/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product/product.service';
import { UnitService } from 'src/app/service/unit/unit.service';
import { InvoiceService } from 'src/app/service/invoice/invoice.service';
import { ContactService } from 'src/app/service/contact/contact.service';

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoiceform.component.html',
  styleUrls: ['./invoiceform.component.css']
})
export class InvoiceformComponent implements OnInit {

  invoice: Invoice;
  invoices: Invoice[];
  selectedValue: string;
  buttonName: string;
  availableProducts: Product[];
  availableUnits: Unit[];
  availableContacts: Contact[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private invoiceService: InvoiceService,
    private productService: ProductService,
    private contactService: ContactService,
    private unitService: UnitService) {
  }

  ngOnInit() {
    this.productService.findAll().subscribe(data => {
      this.availableProducts = data;
    });
    this.contactService.findAll().subscribe(data => {
      this.availableContacts = data;
    });
    this.unitService.findAll().subscribe(data => {
      this.availableUnits = data;
    });
    const invoiceId = this.route.snapshot.paramMap.get('invoiceId');
    this.invoice = new Invoice();
    this.invoice.createdDate = new Date().toISOString().slice(0, 10);
    this.invoice.invoiceLines = [];
    this.buttonName = 'Save Invoice';
    if (invoiceId != null) {
      this.buttonName = 'Update Invoice';
      this.invoiceService.getInvoice(invoiceId).subscribe(data => {
        this.invoice = data;
        this.invoice.createdDate = new Date(data.createdDate).toISOString().slice(0, 10);
      });
    }

  }
  onSubmit() {
    console.log(this.invoice);
    this.invoiceService.saveInvoice(this.invoice).subscribe(result => {
      this.gotoInvoiceView(result.id);
    });
  }

  gotoInvoiceView(invoiceId: string) {
    this.router.navigate(['invoices/viewinvoice/' + invoiceId]);
  }

  addNewRow() {
    const table = this.invoice.invoiceLines;
    table.push(new InvoiceLine());
  }

  changeProduct(x: string) {
    this.productService.getProduct(this.invoice.invoiceLines[x].productId).subscribe(result => {
      this.invoice.invoiceLines[x].hscode = result.hscode;
      this.invoice.invoiceLines[x].productName = result.productName;
      this.inilializeProductLine(x);
    })
    this.calculateInvoiceTotalAmount();
  }

  inilializeProductLine(x: string){
    this.invoice.invoiceLines[x].subTotal = null;
    this.invoice.invoiceLines[x].quantity = null;
    this.invoice.invoiceLines[x].grandTotal = null;
    this.invoice.invoiceLines[x].unitId = null;
    this.invoice.invoiceLines[x].unitName = null;
    this.invoice.invoiceLines[x].unitPrice = null;
  }

  changeUnit(x: string){
    this.unitService.getUnit(this.invoice.invoiceLines[x].unitId).subscribe(result => {
      this.invoice.invoiceLines[x].unitName = result.unitName;
    });
    const productDetail = this.availableProducts.find(result => result.id == this.invoice.invoiceLines[x].productId)
      .productDetails.find(result => result.unitId == this.invoice.invoiceLines[x].unitId);
    if(productDetail != null)
      this.invoice.invoiceLines[x].unitPrice = productDetail.unitPrice;
    else
      this.invoice.invoiceLines[x].unitPrice = 0;
    this.invoice.invoiceLines[x].tax = 0;
    this.calculateProductLineTotal(x);
  }

  calculateInvoiceTotalAmount() {
    this.invoice.subTotal = this.invoice.invoiceLines.map(c => c.subTotal).reduce((sum, current) => sum + current);
    this.invoice.tax = this.invoice.invoiceLines.map(c => c.tax).reduce((sum, current) => sum + current);
    this.invoice.grandTotal = this.invoice.invoiceLines.map(c => c.grandTotal).reduce((sum, current) => sum + current);
  }

  calculateProductLineTotal(x: string) {
    if(this.invoice.invoiceLines[x].unitPrice != null){
    this.invoice.invoiceLines[x].subTotal = this.invoice.invoiceLines[x].unitPrice * this.invoice.invoiceLines[x].quantity;
    this.invoice.invoiceLines[x].grandTotal = this.invoice.invoiceLines[x].subTotal;
    this.calculateInvoiceTotalAmount();
    }
    this.calculateInvoiceTotalAmount();
  }

  populateAddress() {
    this.contactService.getContact(this.invoice.orderBy).subscribe(result => {
      this.invoice.orderByName = result.contactFullName;
      this.invoice.orderByAddress = result.address;
    })
  }

  deleteRow(x: number) {
    this.invoice.invoiceLines.splice(x, 1);
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

}
