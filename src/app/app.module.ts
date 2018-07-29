import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { MassAddComponent } from './mass-add/mass-add.component';
import { SingleAddComponent } from './single-add/single-add.component';
import { AccountantAddComponent } from './accountant-add/accountant-add.component';
import { AccountantEditComponent } from './accountant-edit/accountant-edit.component';
import { AccountantListComponent } from './accountant-list/accountant-list.component';
import { PaymentAddComponent } from './payment-add/payment-add.component';
import { PaymentEditComponent } from './payment-edit/payment-edit.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { ClassAddComponent } from './class-add/class-add.component';
import { ClassEditComponent } from './class-edit/class-edit.component';
import { ClassListComponent } from './class-list/class-list.component';
import { AttendanceAddComponent } from './attendance-add/attendance-add.component';
import { AttendanceEditComponent } from './attendance-edit/attendance-edit.component';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { GradeAddComponent } from './grade-add/grade-add.component';
import { GradeEditComponent } from './grade-edit/grade-edit.component';
import { GradeListComponent } from './grade-list/grade-list.component';
import { ClassRoutinComponent } from './class-routin/class-routin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    StudentAddComponent,
    StudentEditComponent,
    StudentListComponent,
    ParentListComponent,
    ParentAddComponent,
    ParentEditComponent,
    TeacherEditComponent,
    TeacherAddComponent,
     TeacherListComponent,
     MassAddComponent,
     SingleAddComponent,
     AccountantAddComponent,
     AccountantEditComponent,
     AccountantListComponent,
     PaymentAddComponent,
     PaymentEditComponent,
     PaymentListComponent,
     ClassAddComponent,
     ClassEditComponent,
     ClassListComponent,
     AttendanceAddComponent,
     AttendanceEditComponent,
     AttendanceListComponent,
     GradeAddComponent,
     GradeEditComponent,
     GradeListComponent,
     ClassRoutinComponent,

  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
