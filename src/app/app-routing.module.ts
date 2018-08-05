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
	    path: "student",
	    loadChildren:'./student/student.component'
	  },
	  {
	    path: "parent",
	    loadChildren: './parent/parent.component'
	  },

	  {
	    path: "teacher",
	    loadChildren: './teacher/teacher.component'
	  },

	  {
	    path: "class",
	    loadChildren: './class/class.component'
	  },
	  
	  {
	    path: "subject",
	    loadChidren: './subject/subject.component'
	  },

	  {
	  	path: "exam",
	  	loadChildren: './exam/exam.component'

	  },

	  {
	  	path: "transport",
	  	loadChildren: './transport/transport.component'
	  },

	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
