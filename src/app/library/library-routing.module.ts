import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryComponent } from './library.component';
import { BookIssueComponent } from './book-dashboard/book-issue/book-issue.component';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { ManageStudentComponent } from './book-dashboard/manage-student/manage-student.component';
import { ManageBookComponent } from './book-dashboard/manage-book/manage-book.component';
import { SearchComponent } from './book-dashboard/search/search.component';
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
    path: 'book-dashboard/manage-student',
    component: LibraryComponent,
    children: [
      { path: '', component: ManageStudentComponent }
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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
