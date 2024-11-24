import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private users: any[] = [];
  private roles: any[] = [];
  private permissions: any[] = [];

  constructor() {
    
    this.loadData();
  }

  
  private loadData() {
    const savedUsers = localStorage.getItem('users');
    const savedRoles = localStorage.getItem('roles');
    const savedPermissions = localStorage.getItem('permissions');

    if (savedUsers) {
      this.users = JSON.parse(savedUsers);
    }
    if (savedRoles) {
      this.roles = JSON.parse(savedRoles);
    }
    if (savedPermissions) {
      this.permissions = JSON.parse(savedPermissions);
    }
  }

  //Save
  private saveData() {
    localStorage.setItem('users', JSON.stringify(this.users));
    localStorage.setItem('roles', JSON.stringify(this.roles));
    localStorage.setItem('permissions', JSON.stringify(this.permissions));
  }

  // For User
  getUsers() {
    return this.users;
  }

  addUser(user: any) {
    this.users.push(user);
    this.saveData();
  }

  editUser(index: number, updatedUser: any) {
    this.users[index] = updatedUser;
    this.saveData();
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    this.saveData();
  }

  //For Role 
  getRoles() {
    return this.roles;
  }

  addRole(role: any) {
    this.roles.push(role);
    this.saveData();
  }

  editRole(index: number, updatedRole: any) {
    this.roles[index] = updatedRole;
    this.saveData();
  }

  deleteRole(index: number) {
    this.roles.splice(index, 1);
    this.saveData();
  }

  //For Permission 
  getPermissions() {
    return this.permissions;
  }

  addPermission(permission: any) {
    this.permissions.push(permission);
    this.saveData();
  }

  editPermission(index: number, updatedPermission: any) {
    this.permissions[index] = updatedPermission;
    this.saveData();
  }

  deletePermission(index: number) {
    this.permissions.splice(index, 1);
    this.saveData();
  }
}
