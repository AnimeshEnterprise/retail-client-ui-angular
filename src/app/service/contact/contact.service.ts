import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../../model/contact/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:9090/';
  }


  public findAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl + 'contacts');
  }

  public saveContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.baseUrl + 'contact', contact);
  }

  public getContact(contactId): Observable<Contact> {
    return this.http.get<Contact>(this.baseUrl + 'contact/' + contactId);
  }
}
