import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryComponent } from './library.component';
import { BookIssueComponent } from './book-dashboard/book-issue/book-issue.component';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { AddCategoryComponent } from './book-dashboard/add-category/add-category.component';
import { ManageMemberComponent } from './book-dashboard/manage-member/manage-member.component';
import { ManageBookComponent } from './book-dashboard/manage-book/manage-book.component';
import { SearchComponent } from './book-dashboard/search/search.component';
import { RequestComponent } from './book-dashboard/request/request.component';
import { ReturnComponent } from './book-dashboard/return/return.component';
import { ReportComponent } from './book-dashboard/report/report.component';
const routes: Routes = [
   
  {
    path: '',
    component: LibraryComponent
    
  },
  
  {
    path: 'book-dashboard/book-issue',
    component: LibraryComponent,
    children: [
      { path: '', component: BookIssueComponent }
    ]
  },

   {
    path: 'book-dashboard',
    component: LibraryComponent,
    children: [
      { path: '', component: BookDashboardComponent }
    ]
  },
  


     {
    path: 'book-dashboard/add-category',
    component: LibraryComponent,
    children: [
      { path: '', component: AddCategoryComponent }
    ]
  },

     {
    path: 'book-dashboard/manage-member',
    component: LibraryComponent,
    children: [
      { path: '', component: ManageMemberComponent }
    ]
  },

    {
    path: 'book-dashboard/manage-book',
    component: LibraryComponent,
    children: [
      { path: '', component: ManageBookComponent }
    ]
  },

   {
    path: 'book-dashboard/search',
    component: LibraryComponent,
    children: [
      { path: '', component: SearchComponent }
    ]
  },

  {
    path: 'book-dashboard/request',
    component: RequestComponent,
    children: [
      { path: '', component: RequestComponent }
    ]
  },

   {
    path: 'book-dashboard/return',
    component: ReturnComponent,
    children: [
      { path: '', component: ReturnComponent }
    ]
  },

 {
    path: 'book-dashboard/report',
    component: ReportComponent,
    children: [
      { path: '', component: ReportComponent }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
