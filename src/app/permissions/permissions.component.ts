import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss'],
})
export class PermissionsComponent implements OnInit {
  permissions: string[] = []; 
  newPermission: string = ''; 
  editIndex: number | null = null;
  editPermissionValue: string = ''; 

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.permissions = this.dataService.getPermissions();
  }

  //For Add
  addPermission() {
    if (this.newPermission.trim()) {
      this.dataService.addPermission(this.newPermission.trim());
      this.newPermission = '';
    }
  }

  //For Edit
  editPermission(index: number) {
    this.editIndex = index;
    this.editPermissionValue = this.permissions[index];
  }

  //For Save
  saveEditPermission(index: number) {
    if (this.editPermissionValue.trim()) {
      this.dataService.editPermission(index, this.editPermissionValue.trim());
      this.editIndex = null;
      this.editPermissionValue = '';
    }
  }

  //For Delete
  deletePermission(index: number) {
    this.dataService.deletePermission(index);
  }
}
