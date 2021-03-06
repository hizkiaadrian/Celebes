import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {ListOfEmployeesComponent} from "./tab-contents/list-of-employees/list-of-employees.component";
import {EmployeeDetailComponent} from "./tab-contents/employee-detail/employee-detail.component";
import {PageNotFoundComponent} from "../../shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {path:'employee-details/:id',component: EmployeeDetailComponent},
  {path:'', component: AdminDashboardComponent, children: [
      {path:'list-of-employees',component: ListOfEmployeesComponent},
      {path:'',pathMatch:'full',redirectTo:'list-of-employees'},
      {path:'**', component: PageNotFoundComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
