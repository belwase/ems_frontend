import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttendanceRoutingModule } from './attendance-routing.module';

import { AttendanceComponent } from './attendance.component';
import { TakeAttendanceComponent } from './take-attendance/take-attendance.component';



@NgModule({

  imports: [
    CommonModule,
    AttendanceRoutingModule
  ],
  declarations: [AttendanceComponent, TakeAttendanceComponent]
})
export class AttendanceModule { }