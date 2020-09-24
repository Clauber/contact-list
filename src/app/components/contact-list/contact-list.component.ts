import { Component, OnInit } from '@angular/core';
import { Contact, contactSeed } from 'src/app/model/contact/contact.model';
import { SortingID, sortingIDs, sortingLabels } from './sorting-options';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contactList: Contact[];
  isEditing: boolean;
  editingContact: Contact;

  sortedBy = sortingLabels.CREATED_BY;
  sortingLabels = sortingLabels;
  sortingIDs = sortingIDs;

  constructor() {}

  ngOnInit(): void {
    this.contactList = contactSeed;
  }

  //CRUD Operations(except for read for obvious reasons)
  //Delete
  onDelete(contact: Contact) {
    this.contactList = this.contactList.filter((c) => c.id !== contact.id);
  }
  //Getting into edit mode
  onEdit(contact: Contact) {
    this.isEditing = true;
    this.editingContact = contact;
  }
  //Getting out of edit more
  cancelEdit() {
    this.isEditing = false;
    this.editingContact = null;
  }
  //Updating
  onUpdate(contact: Contact) {
    let contactIndex = this.contactList.findIndex(
      (currentContact) => currentContact.id === contact.id
    );
    this.contactList[contactIndex] = contact;
  }
  //Creating
  onCreate(contact: Contact) {
    contact.id = this.contactList[this.contactList.length - 1].id + 1;
    this.contactList.push(contact);
  }

  //Sorting functions
  changeSorting = (option: SortingID) => {
    if (sortingLabels[option] === this.sortedBy) {
      return;
    }
    this.sortedBy = sortingLabels[option];
    //If we have more options in here we could optimize ths, but since there are only two this should be good enough
    if (sortingLabels[option] === sortingLabels.CREATED_BY) {
      this.contactList = this.contactList.sort(sortContactListById);
    } else if (sortingLabels[option] === sortingLabels.FIRST_NAME) {
      //Sorting by name
      this.contactList = this.contactList.sort(sortContactListByName);
    }
  };
}

//Sorting functions
const sortContactListByName = (contactA: Contact, contactB: Contact) => {
  let a = contactA.name.toLowerCase();
  let b = contactB.name.toLowerCase();
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }
  return 0;
};
const sortContactListById = (contactA: Contact, contactB: Contact) => {
  if (contactA.id > contactB.id) {
    return 1;
  } else if (contactA.id < contactB.id) {
    return -1;
  }
  return 0;
};
