import{ NgModule} from '@angular/core';
import{ Routes, RouteModule} from '@angular/router';
import{ SubjectAddComponent} from './add/add.component';
import{ SubjectEditComponent} from './edit/edit.component';
import{ SubjectListComponent} from './list/list.component';

const routes: Routes= [

{
	path: "subject/add",
	component: SubjectAddComponent
},

{
	path: "subject/edit",
	component: SubjectEditComponent
},

{
	path: "subject/list",
	component: SubjectListComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }