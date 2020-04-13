import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportsComponent } from './reports/reports.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'Reports',component:ReportsComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
