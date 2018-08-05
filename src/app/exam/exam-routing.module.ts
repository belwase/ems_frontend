import{ NgModule} from '@angular/core';
import{ Routes, RouteModule} from '@angular/router';
import{ GradesAddComponent} from './grades/add/add.component';
import{ GradesEditComponent} from './grades/edit/edit.component';
import{ GradesListComponent} from './grades/list/list.component';
import{ MarksAddComponent} from '.marks/add/add.component';
import{ MarksEditComponent} from '.marks/edit/edit.component';
import{ MarksListComponent} from '.marks/list/list.component';

const routes: Routes= [

{
	path: "grades/add",
	component: GradesAddComponent
},

{
	path: "grades/edit",
	component: GradesEditComponent
},

{
	path: "grades/list",
	component: GradesListComponent
},

{
	path: "marks/add",
	component: MarksAddComponent
},

{
	path: "marks/edit",
	component: MarksEditComponent
},

{
	path: "marks/list",
	component: MarksListComponent
},

];

@NgModule({
	imports: [Router.forRoot(routes)],
	exports: [RouterModule]
})
export class MarksRoutingModule { }