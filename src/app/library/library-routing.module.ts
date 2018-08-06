import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryComponent } from './library.component';
import { BookIssueComponent } from './book-dashboard/book-issue/book-issue.component';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';

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
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
