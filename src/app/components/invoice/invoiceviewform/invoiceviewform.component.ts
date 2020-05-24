import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../../service/invoice/invoice.service'
import { Invoice } from '../../../model/invoice/invoice.model';
import { Product } from '../../../model/product/product.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-invoiceviewform',
  templateUrl: './invoiceviewform.component.html',
  styleUrls: ['./invoiceviewform.component.css']
})
export class InvoiceviewformComponent implements OnInit {

  invoice: Invoice;
  availableProducts: Product[];

  constructor(private invoiceService: InvoiceService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getInvoice();
  }

  getInvoice(): void {
    const invoiceId = this.router.snapshot.paramMap.get('invoiceId');
    this.invoice = new Invoice();
    this.invoiceService.getInvoice(invoiceId).subscribe(data => {
      this.invoice = data;
      this.invoice.createdDate = new Date(data.createdDate).toISOString().slice(0, 10);
    });
  }
}
