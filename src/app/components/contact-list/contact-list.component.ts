import { IContact } from './../../../models/contact.model';
import { ContactService } from './../../../services/contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
})
export class ContactListComponent implements OnInit {
  constructor(private readonly contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.fetchContacts();
  }

  get contacts(): IContact[] {
    return this.contactService.contacts();
  }
}
