import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from './roles/roles.component';
import { PermissionsComponent } from './permissions/permissions.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'users', component: UsersComponent},
  { path: 'roles', component: RolesComponent },
  { path: 'permissions', component: PermissionsComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
