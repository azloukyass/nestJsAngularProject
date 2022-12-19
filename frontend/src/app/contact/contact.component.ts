import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/services/api.service';
import {Contact} from '../shared/models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'title', 'email', 'phone', 'address', 'city', 'actions'];
  dataSource = [];
  contact = {};

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.apiService.readContacts().subscribe((result) => {
      this.dataSource = result;
    });
  }

  selectContact(contact: Contact) {
    this.contact = contact;
  }

  newContact() {
    this.contact = {};
  }

  createContact(contact: Contact){
    this.apiService.createContact(contact).subscribe((result)=>{
      console.log(result);
    });

  }

  deleteContact(id: number){
    this.apiService.deleteContact(id).subscribe((result)=>{
      console.log(result);
    });
  }

  updateContact(contact: Contact){
    this.apiService.updateContact(contact).subscribe((result)=>{
      console.log(result);
    });
  }
}
