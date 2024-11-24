import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: any[] = []; 
  dataSource: any[] = []; 
  displayedColumns: string[] = ['name', 'email', 'role', 'status', 'actions'];
  isAddingUser: boolean = false; 
  editingUserId: number | null = null; 
  newUser = { name: '', email: '', role: '', status: 'Active' }; 
  editUserData = { id: 0, name: '', email: '', role: '', status: 'Active' }; 

  constructor() {}

  ngOnInit(): void {
    
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
    this.dataSource = this.users; 
  }

  // Add new user
  addUser(): void {
    if (this.newUser.name && this.newUser.email && this.newUser.role) {
      const newUser = {
        id: Math.max(...this.users.map((user) => user.id), 0) + 1, 
        name: this.newUser.name,
        email: this.newUser.email,
        role: this.newUser.role,
        status: this.newUser.status,
      };
      this.users.push(newUser);
      this.dataSource = [...this.users];
      localStorage.setItem('users', JSON.stringify(this.users));
      this.newUser = { name: '', email: '', role: '', status: 'Active' }; 
      this.isAddingUser = false; 
    } else {
      alert('Please fill in all fields.');
    }
  }

  // Edit
  startEditUser(user: any): void {
    this.editingUserId = user.id;
    this.editUserData = { ...user }; 
  }

  // Save
  saveEditUser(): void {
    const index = this.users.findIndex((user) => user.id === this.editUserData.id);
    if (index !== -1) {
      this.users[index] = { ...this.editUserData }; 
      this.dataSource = [...this.users]; 
      localStorage.setItem('users', JSON.stringify(this.users)); 
      this.editingUserId = null; 
    }
  }

  
  cancelEditUser(): void {
    this.editingUserId = null;
  }

  toggleStatus(user: any): void {
    user.status = user.status === 'Active' ? 'Inactive' : 'Active'; 
    this.dataSource = [...this.users]; 
    localStorage.setItem('users', JSON.stringify(this.users)); 
  }

  // Delete
  deleteUser(id: number): void {
    this.users = this.users.filter((user) => user.id !== id);
    this.dataSource = [...this.users]; 
    localStorage.setItem('users', JSON.stringify(this.users)); 
    alert(`User with ID ${id} deleted.`);
  }
}
