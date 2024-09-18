import { NgFor } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, FormSubmittedEvent } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-user-management',
  standalone: true,
  imports: [RouterLink,NgFor,FormsModule],
  templateUrl: './admin-user-management.component.html',
  styleUrl: './admin-user-management.component.css'
})
export class AdminUserManagementComponent implements OnInit {

  users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'employee' },
    { id: 3, name: 'Mark Jones', email: 'mark@example.com', role: 'employee' }
  ];

  filteredUsers = this.users;
  selectedRole: string = 'all';
  showAddUserModal: boolean = false;

  newUser = {
    id: 0,
    name: '',
    email: '',
    role: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.filteredUsers = this.users;
  }

  // Filter users by role
  filterByRole(): void {
    if (this.selectedRole === 'all') {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter(user => user.role === this.selectedRole);
    }
  }

  // Open the Add User Modal
  openAddUserModal(): void {
    this.showAddUserModal = true;
  }

  // Close the Add User Modal
  closeAddUserModal(): void {
    this.showAddUserModal = false;
  }

  // Add User function
  addUser(): void {
    const newId = this.users.length ? this.users[this.users.length - 1].id + 1 : 1;
    this.newUser.id = newId;
    this.users.push({ ...this.newUser });
    this.filteredUsers = this.users;
    this.newUser = { id: 0, name: '', email: '', role: '' };
    this.closeAddUserModal();
  }

  // Edit User function (Optional)
  openEditUserModal(user: any): void {
    alert(`Edit User: ${user.name}`);
  }

  // Delete User function
  deleteUser(userId: number): void {
    this.users = this.users.filter(user => user.id !== userId);
    this.filteredUsers = this.users;
    alert('User deleted');
  }
}{

}
