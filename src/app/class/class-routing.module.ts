import{ NgModule} from '@angular/core';
import{ Routes, RouteModule} from '@angular/router';

import{ ClassAddComponent} from './add/add.component';
import{ ClassAddNewSectionComponent} from './addnewsection/addnewsection.component';
import{ ClassEditComponent} from './edit/edit.component';
import{ ClassListComponent} from './list/list.component';


const routes: Routes= [
{
	path: "class/add",
	component: ClassAddComponent
},

{
	path: "class/addnewsection",
	component: ClassAddNewSectionComponent
},

{
	path: "class/edit",
	component: ClassEditComponent
},

{
	path: "class/list",
	component: ClassListComponent
},

];

@NgModule({
	imports: [Router.forRoot(routes)],
	exports: [RouterModule]
})
export class ClassRoutingModule { }