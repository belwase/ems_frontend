import{ NgModule} from '@angular/core';
import{ Routes, RouteModule} from '@angular/router';
import{ ParentAddComponent} from './add/add.component';
import{ ParentEditComponent} from './edit/edit.component';
import{ ParentListComponent} from './list/list.component';

const routes: Routes= [

{
	path: "parent/add",
	component: ParentAddComponent
},

{
	path: "parent/edit",
	component: ParentEditComponent
},

{
	path: "parent/list",
	component: ParentListComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }