import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';

import { LibraryComponent } from './library.component';
import { BookIssueComponent } from './book-dashboard/book-issue/book-issue.component';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { ManageStudentComponent } from './book-dashboard/manage-student/manage-student.component';
import { ManageBookComponent } from './book-dashboard/manage-book/manage-book.component';


@NgModule({

  imports: [
    CommonModule,
    LibraryRoutingModule
  ],
  declarations: [LibraryComponent, BookIssueComponent, BookDashboardComponent, ManageStudentComponent, ManageBookComponent]
})
export class LibraryModule { }