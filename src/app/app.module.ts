import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CashmereModule } from './cashmere/cashmere.module';
// import { RouterModule, Routes } from '@angular/router';

// import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';
import { PeopleComponent } from './people/people.component';
import { PeopleSearchComponent } from './people-search/people-search.component';
import { AddComponent } from './add/add.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { AboutComponent } from './about/about.component';

// const appRoutes: Routes = [
//   {
//     path: 'products',
//     component: PeopleComponent,
//     data: { title: 'Product List' }
//   }
// ]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
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
    // RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CashmereModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [],
  entryComponents: [PeopleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
