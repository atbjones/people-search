import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleComponent } from './people/people.component';
import { PeopleSearchComponent } from './people-search/people-search.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { AddComponent } from './add/add.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: PeopleSearchComponent },
  { path: 'people/:id', component: PeopleDetailComponent },
  { path: 'edit/:id', component: EditPersonComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'add', component: AddComponent },
  { path: 'about', component: AboutComponent },
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
