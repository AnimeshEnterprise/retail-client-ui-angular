import { Component, OnInit } from '@angular/core';
import { Contact } from '../../../model/contact/contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/service/contact/contact.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  contact: Contact;
  selectedValue: string;
  buttonName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    const contactId = this.route.snapshot.paramMap.get('contactId');
    this.contact = new Contact();
    this.buttonName = 'Save Contact';
    if (contactId != null) {
      this.buttonName = 'Update Contact';
      this.contactService.getContact(contactId).subscribe(data => {
        this.contact = data;
        console.log(this.contact);
      });
    }
  }

  onSubmit() {
    this.contactService.saveContact(this.contact).subscribe(result => {
      this.gotoContactView(result.id);
    });
  }

  gotoContactView(contactId: string) {
    this.router.navigate(['listcontact/viewcontact/' + contactId]);
  }

}
