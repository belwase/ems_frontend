import { NgModule} from '@angular/core';
import { ParentRoutingModule} from './Parent-routing.module';
import { Routes, RouterModule} from '@angular/router';
import { ParentAddComponent} from './add/add.component';
import { ParentEditComponent} from './edit/edit.component';
import { ParentListComponent} from './list/list.component';

@NgModule({
	 declarations: [
       ParentAddComponent,
       ParentEditComponent,
       ParentListComponent
	  ],
 imports: [
 Browsermodule,
 ParentRoutingModule,

 HttpClientModule,
 FormsModule
 ],
 providers: [],
 bootstrap: [parentComponent]
})

export class ParentModule {}
