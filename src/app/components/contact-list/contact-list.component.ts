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
  sortedBy = sortingLabels.CREATED_BY;
  sortingLabels = sortingLabels;
  sortingIDs = sortingIDs;

  constructor() {}

  ngOnInit(): void {
    this.contactList = contactSeed;
  }

  changeSorting = (option: SortingID) => {
    if (sortingLabels[option] === this.sortedBy) {
      return;
    }
    this.sortedBy = sortingLabels[option];
    if (sortingLabels[option] === sortingLabels.CREATED_BY) {
      //Sorting by id
      this.contactList = this.contactList.sort(sortContactListById);
    } else if (sortingLabels[option] === sortingLabels.FIRST_NAME) {
      //Sorting by name
      this.contactList = this.contactList.sort(sortContactListByName);
    }
  };
}
const sortContactListByName = (contactA: Contact, contactB: Contact) => {
  if (contactA.name > contactB.name) {
    return 1;
  } else if (contactA.name < contactB.name) {
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
