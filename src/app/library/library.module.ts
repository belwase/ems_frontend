import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryRoutingModule } from './library-routing.module';

import { LibraryComponent } from './library.component';
import { BookIssueComponent } from './book-dashboard/book-issue/book-issue.component';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';



@NgModule({

  imports: [
    CommonModule,
    LibraryRoutingModule
  ],
  declarations: [LibraryComponent, BookIssueComponent, BookDashboardComponent]
})
export class LibraryModule { }