import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
import { Contact } from 'src/app/model/contact/contact.model';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  // We are going to use this component to add and edit
  @Input() editingContact: Contact;
  @Input() isEditing: boolean;
  @Output() submitContact: EventEmitter<Contact> = new EventEmitter();
  @Output() submitEditContact: EventEmitter<Contact> = new EventEmitter();
  @Output() cancelEdit: EventEmitter<Contact> = new EventEmitter();

  name: string = '';
  address: string;
  email: string;
  phoneNumber: number;

  constructor() {}

  ngOnInit(): void {}

  //We'll use this to push the contact we are editing into our properties
  ngOnChanges(changes: SimpleChanges) {
    if (this.isEditing) {
      this.name = this.editingContact.name;
      this.address = this.editingContact.address;
      this.email = this.editingContact.email;
      this.phoneNumber = this.editingContact.phone;
    }
  }

  onCreate() {
    if (this.name && this.address && this.email && this.phoneNumber) {
      let newContact = new Contact(
        null,
        this.name,
        this.address,
        this.email,
        this.phoneNumber
      );
      this.submitContact.emit(newContact);
      this.clearAllFields();
    } else {
      console.log('You are missing some fields');
    }
  }

  onEdit() {
    let newContact = new Contact(
      this.editingContact.id,
      this.name,
      this.address,
      this.email,
      this.phoneNumber
    );
    this.submitEditContact.emit(newContact);
    //Now we will let the contact-list know we are not in edit mode anymore and clear the fields
    this.onCancel();
  }

  onCancel() {
    this.cancelEdit.emit();
    this.clearAllFields();
  }

  clearAllFields() {
    this.name = '';
    this.address = '';
    this.email = '';
    this.phoneNumber = null;
  }
}
