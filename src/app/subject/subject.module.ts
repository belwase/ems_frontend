import { NgModule} from '@angular/core';
import { SubjectRoutingModule} from './SubjectRoutingModule';
import { Routes, RouterModule} from '@angular/router';
import { SubjectAddComponent} from './add/add.component';
import { SubjectEditComponent} from './edit/edit.component';
import { SubjectListComponent} from './list/list.component';

@NgModule({
	 declarations: [
       SubjectAddComponent,
       SubjectEditComponent,
       SubjectListComponent
	  ],
 imports: [
 Browsermodule,
 SubjectRoutingModule,

 HttpClientModule,
 FormsModule
 ],
 providers: [],
 bootstrap: [subjectComponent]
})

export class SubjectModule {}
