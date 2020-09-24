import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/model/contact/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  @Input() contact: Contact;
  @Output() deleteContact: EventEmitter<any> = new EventEmitter();
  @Output() editContact: EventEmitter<Contact> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  emmitDelete(contact: Contact) {
    this.deleteContact.emit(contact);
  }

  emmitEdit(contact: Contact) {
    this.editContact.emit(contact);
  }
}
