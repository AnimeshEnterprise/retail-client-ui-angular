import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../../model/invoice/invoice.model';
import { InvoiceService } from '../../../service/invoice/invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoicelist.component.html',
  styleUrls: ['./invoicelist.component.css']
})
export class InvoicelistComponent implements OnInit {

  invoices: Invoice[]

  constructor(private invoiceService: InvoiceService) { }

  ngOnInit() {

    this.invoiceService.findAll().subscribe(data =>{
      this.invoices = data;
    });
  }

}
