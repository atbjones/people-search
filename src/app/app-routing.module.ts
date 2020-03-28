import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { AddComponent } from './add/add.component';
import { EditPersonComponent } from './edit-person/edit-person.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: DashboardComponent },
  { path: 'people/:id', component: PeopleDetailComponent },
  { path: 'edit/:id', component: EditPersonComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'add', component: AddComponent },
]

@NgModule({
  // declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
