import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../service/contact/contact.service'
import { Contact } from '../../../model/contact/contact.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contactviewform',
  templateUrl: './contactviewform.component.html',
  styleUrls: ['./contactviewform.component.css']
})
export class ContactviewformComponent implements OnInit {

  contact: Contact;

  constructor(private contactService: ContactService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getContact();
  }

  getContact(): void {
    const contactId = this.router.snapshot.paramMap.get('contactId');
    this.contact = new Contact();
    this.contactService.getContact(contactId).subscribe(data => {
      this.contact = data;
    });
  }

}
