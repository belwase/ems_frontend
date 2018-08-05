import{ NgModule} from '@angular/core';
import{ Routes, RouteModule} from '@angular/router';
import{ TransportAddComponent} from './add/add.component';
import{ TransportEditComponent} from './edit/edit.component';
import{ TransportListComponent} from './list/list.component';

const routes: Routes= [

{
	path: "transport/add",
	component: TransportAddComponent
},

{
	path: "transport/edit",
	component: TransportEditComponent
},

{
	path: "transport/list",
	component: TransportListComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TransportRoutingModule { }