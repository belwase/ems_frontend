import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { LibraryRoutingModule } from './library-routing.module';

import { LibraryComponent } from './library.component';
import { BookIssueComponent } from './book-dashboard/book-issue/book-issue.component';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { ManageMemberComponent } from './book-dashboard/manage-member/manage-member.component';
import { ManageBookComponent } from './book-dashboard/manage-book/manage-book.component';
import { SearchComponent } from './book-dashboard/search/search.component';
import { AddCategoryComponent } from './book-dashboard/add-category/add-category.component';
import { RequestComponent } from './book-dashboard/request/request.component';
import { ReturnComponent } from './book-dashboard/return/return.component';
import { ReportComponent } from './book-dashboard/report/report.component';

@NgModule({

  imports: [
    CommonModule,
   	FormsModule,
    LibraryRoutingModule
  ],
  declarations: [LibraryComponent, BookIssueComponent, BookDashboardComponent, AddCategoryComponent, ManageMemberComponent, ManageBookComponent, SearchComponent, RequestComponent, ReturnComponent, ReportComponent]
})
export class LibraryModule { }