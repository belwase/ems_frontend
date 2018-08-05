import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendanceComponent } from './attendance.component';
import { TakeAttendanceComponent } from './take-attendance/take-attendance.component';




const routes: Routes = [
   

  {
    path: '',
    component: AttendanceComponent
    
  },
  {
    path: 'take-attendance',
    component: TakeAttendanceComponent,
    children: [
      { path: '', component: TakeAttendanceComponent }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
