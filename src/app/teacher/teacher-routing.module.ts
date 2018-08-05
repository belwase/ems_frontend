import{ NgModule} from '@angular/core';
import{ Routes, RouteModule} from '@angular/router';
import{ TeacherAddComponent} from './add/add.component';
import{ TeacherEditComponent} from './edit/edit.component';
import{ TeacherListComponent} from './list/list.component';

const routes: Routes= [

{
	path: "teacher/add",
	component: TeacherAddComponent
},

{
	path: "teacher/edit",
	component: TeacherEditComponent
},

{
	path: "teacher/list",
	component: TeacherListComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }