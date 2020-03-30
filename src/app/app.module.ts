import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CashmereModule } from './cashmere/cashmere.module';


import { AppComponent } from './app.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleComponent } from './people/people.component';
import { PeopleSearchComponent } from './people-search/people-search.component';
import { AddComponent } from './add/add.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PeopleDetailComponent,
    PeopleSearchComponent,
    AddComponent,
    TopBarComponent,
    EditPersonComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CashmereModule,
  ],
  providers: [],
  entryComponents: [PeopleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
