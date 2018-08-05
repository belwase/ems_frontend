import { NgModule} from '@angular/core';
import { StudentRoutingModule} from './StudentRoutingModule';
import { Routes, RouterModule} from '@angular/router';
import { StudentAddComponent} from './add/add.component';
import { StudentEditComponent} from './edit/edit.component';
import { StudentListComponent} from './list/list.component';

@NgModule({
	 declarations: [
       StudentAddComponent,
       StudentEditComponent,
       StudentListComponent
	  ],
 imports: [
 Browsermodule,
 StudentRoutingModule,

 HttpClientModule,
 FormsModule
 ],
 providers: [],
 bootstrap: [StudentComponent]
})

export class StudentModule {}
