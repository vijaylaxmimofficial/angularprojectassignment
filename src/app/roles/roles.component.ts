import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  roles: { name: string; permissions: { read: boolean; write: boolean; delete: boolean } }[] = [];
  newRole: string = '';
  newPermissions = { read: false, write: false, delete: false };
  editIndex: number | null = null;
  editRoleValue: string = '';
  editPermissions = { read: false, write: false, delete: false };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.roles = this.dataService.getRoles();
  }

  // Add new role
  addRole() {
    if (this.newRole.trim()) {
      const newRole = {
        name: this.newRole.trim(),
        permissions: { ...this.newPermissions },
      };
      this.dataService.addRole(newRole);
      this.newRole = '';
      this.newPermissions = { read: false, write: false, delete: false };
      this.roles = this.dataService.getRoles(); 
    }
  }

  // Edit role
  editRole(index: number) {
    this.editIndex = index;
    this.editRoleValue = this.roles[index].name;
    this.editPermissions = { ...this.roles[index].permissions };
  }

  // Save role
  saveEditRole(index: number) {
    if (this.editRoleValue.trim()) {
      const updatedRole = {
        name: this.editRoleValue.trim(),
        permissions: { ...this.editPermissions },
      };
      this.dataService.editRole(index, updatedRole);
      this.editIndex = null;
      this.editRoleValue = '';
      this.editPermissions = { read: false, write: false, delete: false };
      this.roles = this.dataService.getRoles();  
    }
  }

  // Delete role
  deleteRole(index: number) {
    this.dataService.deleteRole(index);
    this.roles = this.dataService.getRoles();  
  }
}
