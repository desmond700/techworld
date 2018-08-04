import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-list-customers',
  template: `
  <div class="container py-5">

	<h3>List of users</h3>
	<hr>
	<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Firstname</th>
        <th scope="col">Lastname</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Password</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let value of users, let i = index">
        <th scope="row">{{i + 1}}</th>
        <td>{{value.firstName}}</td>
        <td>{{value.lastName}}</td>
        <td>{{value.username}}</td>
        <td>{{value.email}}</td>
        <td>{{value.password}}</td>
      <td><button type="button" (click)="onDelete(value._id)" class="btn btn-primary">Delete</button></td>
      </tr>
    </tbody>
  </table>

  </div>

  `,
  styles: []
})
export class ListCustomersComponent implements OnInit {

  users: any;

  constructor(private _admin: AdminService) { }

  ngOnInit() {
    this._admin.getUsers().subscribe(
      res => { this.users = res; },
      err => console.log('Error fetching users: ' + err)
    );
  }

}
