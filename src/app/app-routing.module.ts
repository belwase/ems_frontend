import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';





const routes: Routes = [
	 {
	    path: "",
	    component: DashboardComponent
	  },

	 {
	    path: "login",
	    component: LoginComponent
	  },
	  {
	    path: "register",
	    component: RegisterComponent
	  },

	  {
	    path: 'attendance',
	    loadChildren: './attendance/attendance.module#AttendanceModule'
	  },
	  
	   {
	    path: 'accounting',
	    loadChildren: './accounting/accounting.module#AccountingModule'
	  },

	    {
	    path: 'library',
	    loadChildren: './library/library.module#LibraryModule'
	  },


	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
