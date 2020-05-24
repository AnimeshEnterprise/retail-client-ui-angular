import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../model/contact/contact.model';
import { ContactService } from '../../../service/contact/contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit() {

    this.contactService.findAll().subscribe(data =>{
      this.contacts = data;
    });
  }

}
