import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../../model/invoice/invoice.model';

@Injectable()
export class InvoiceService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:9090/';
  }


  public findAll(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(this.baseUrl + 'invoices');
  }

  public saveInvoice(invoice: Invoice): Observable<Invoice> {
    console.log(invoice);
    return this.http.post<Invoice>(this.baseUrl + 'invoice', invoice);
  }

  public getInvoice(invoiceId): Observable<Invoice> {
    return this.http.get<Invoice>(this.baseUrl + 'invoice/' + invoiceId);
  }

}
