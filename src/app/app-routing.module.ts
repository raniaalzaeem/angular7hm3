import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{DepartmentdetailsComponent} from './departmentdetails/departmentdetails.component'
import {DepartmentlistComponent} from './departmentlist/departmentlist.component'

const routes: Routes = [
  {path:'departments',component: DepartmentlistComponent},
  {path:'departmentdetails/:id',component: DepartmentdetailsComponent}
];

export const routingComponents=[DepartmentdetailsComponent]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
