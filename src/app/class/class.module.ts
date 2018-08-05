import { BrowseModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ClassRoutingModule} from './class-routing.module';

import { ClassAddComponent} from './add/add.component';
import { ClassAddNewSection} from './addnewsection/addnewsection.component';
import { ClassEditComponent} from './edit/edit.component';
import { ClassListComponent} from './list/list.component';

@NgModule({
	 declarations: [
       ClassAddComponent,
       ClassAddNewSectionComponent,
       ClassEditComponent,
       ClassListComponent
	  ],

	  imports: [
	  BrowseModule,
	  ClassRoutingModule,

	  HttpClientModule,
	  FormsModule
	  ],
	  providers: [],
	  bootstrap: []
})

export class ClassModule {}
