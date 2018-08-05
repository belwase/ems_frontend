import { NgModule} from '@angular/core';
import { TeacherRoutingModule} from './TeacherRoutingModule';
import { Routes, RouterModule} from '@angular/router';
import { TeacherAddComponent} from './add/add.component';
import { TeacherEditComponent} from './edit/edit.component';
import { TeacherListComponent} from './list/list.component';

@NgModule({
	 declarations: [
       TeacherAddComponent,
       TeacherEditComponent,
       TeacherListComponent
	  ],
 imports: [
 Browsermodule,
 TeacherRoutingModule,

 HttpClientModule,
 FormsModule
 ],
 providers: [],
 bootstrap: [teacherComponent]
})

export class TeacherModule {}
