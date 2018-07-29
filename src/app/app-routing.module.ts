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
import { AccountantAddComponent } from './accountant-add/accountant-add.component';
import { AccountantListComponent } from './accountant-list/accountant-list.component';
import { AccountantEditComponent } from './accountant-edit/accountant-edit.component';
import { PaymentAddComponent } from './payment-add/payment-add.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentEditComponent } from './payment-edit/payment-edit.component';
import { ClassAddComponent } from './class-add/class-add.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassEditComponent } from './class-edit/class-edit.component';
import { ClassRoutinComponent } from './class-routin/class-routin.component';
import { AttendanceAddComponent } from './attendance-add/attendance-add.component';
import { AttendanceEditComponent } from './attendance-edit/attendance-edit.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { GradeAddComponent } from './grade-add/grade-add.component';
import { GradeEditComponent } from './grade-edit/grade-edit.component';
import { GradeListComponent } from './grade-list/grade-list.component';
import { SubjectAddComponent } from './subject-add/subject-add.component';
import { SubjectEditComponent } from './subject-edit/subject-edit.component';
import { SubjectListComponent } from './subject-list/subject-list.component';



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
	  {
	    path: "accountant/add",
	    component: AccountantAddComponent
	  },
	  {
	    path: "accountant/list",
	    component: AccountantListComponent
	  },
	  {
	    path: "accountant/edit/:id",
	    component: AccountantEditComponent
	  },
	  {
	    path: "payment/add",
	    component: PaymentAddComponent
	  },
	  {
	    path: "payment/list",
	    component: PaymentListComponent
	  },
	  {
	    path: "payment/edit/:id",
	    component: PaymentEditComponent
	  },

	  {
	    path: "class/add",
	    component: ClassAddComponent
	  },
	  {
	    path: "class/list",
	    component: ClassListComponent
	  },
	  {
	    path: "class/edit/:id",
	    component: ClassEditComponent
	  },

{
	    path: "class/routin",
	    component: ClassRoutinComponent
	  },

	  {
	    path: "attendance/add",
	    component: AttendanceAddComponent
	  },
	  {
	    path: "attendance/list",
	    component: AttendanceListComponent
	  },
	  {
	    path: "attendance/edit/:id",
	    component: AttendanceEditComponent
	  },

	  {
	    path: "grade/add",
	    component: GradeAddComponent
	  },
	  {
	    path: "grade/list",
	    component: GradeListComponent
	  },
	  {
	    path: "grade/edit/:id",
	    component: GradeEditComponent
	  },
     {
	    path: "subject/add",
	    component: SubjectAddComponent
	  },
	  {
	    path: "subject/list",
	    component: SubjectListComponent
	  },
	  {
	    path: "subject/edit/:id",
	    component: SubjectEditComponent
	  },
	  
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
