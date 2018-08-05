import{ NgModule} from '@angular/core';
import{ Routes, RouteModule} from '@angular/router';
import { StudentComponent } from './student.component';
import{ StudentAddComponent} from './add/add.component';
import{ StudentEditComponent} from './edit/edit.component';
import{ StudentListComponent} from './list/list.component';

const routes: Routes= [

{
	path: "student/add",
	component: StudentComponent,
	children: [
      {path: '',component: StudentAddComponent}
	]
},

{
	path: "student/edit",
	component: StudentEditComponent
},

{
	path: "student/list",
	component: StudentListComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }