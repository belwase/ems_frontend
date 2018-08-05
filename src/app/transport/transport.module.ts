import { NgModule} from '@angular/core';
import { TransportRoutingModule} from './TransportRoutingModule';
import { Routes, RouterModule} from '@angular/router';
import { TransportAddComponent} from './add/add.component';
import { TransportEditComponent} from './edit/edit.component';
import { TransportListComponent} from './list/list.component';

@NgModule({
	 declarations: [
       TransportAddComponent,
       TransportEditComponent,
       TransportListComponent
	  ],
 imports: [
 Browsermodule,
 TransportRoutingModule,

 HttpClientModule,
 FormsModule
 ],
 providers: [],
 bootstrap: [transportComponent]
})

export class TransportModule {}
