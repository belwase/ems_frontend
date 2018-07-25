import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ParentAddComponent } from './parent-add/parent-add.component';
import { ParentEditComponent } from './parent-edit/parent-edit.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';


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
	    path: "student/list",
	    component: StudentListComponent
	  },
	  {
	    path: "student/add",
	    component: StudentAddComponent
	  },
	  {
	    path: "student/edit",
	    component: StudentEditComponent
	  },
	  {
	    path: "parent/list",
	    component: ParentListComponent
	  },

	   {
	    path: "parent/add",
	    component: ParentAddComponent
	  }, 
       {
	    path: "parent/edit/:id",
	    component: ParentEditComponent
	  },
	  {
	    path: "teacher/add",
	    component: TeacherAddComponent
	  },
	  {
	    path: "teacher/list",
	    component: TeacherListComponent
	  },
	  {
	    path: "teacher/edit/:id",
	    component: TeacherEditComponent
	  },

	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
