import { Component, OnInit, ViewChild } from '@angular/core';

import { Person } from '../person';
import { PersonService } from '../person.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from '../config';
import { HcTableDataSource, HcSort } from '@healthcatalyst/cashmere';
import { TableModule } from '@healthcatalyst/cashmere';
// import { PEOPLE } from '../mock-people';

// export interface testElement {
//   Id: number;
//   name: string;
// }
// const DATA: testElement[] = [
//     {Id:1, name: 'Fart'},
//     {Id:2, name: 'farter'}
    
//   ];
  
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Config;
  loadAmount: number;

  // displayedColumns = ['Id', 'name'];
  // dataSource: HcTableDataSource<Person>;

  // @ViewChild(HcSort)
  // sort:HcSort;
  

  constructor(
    private personService: PersonService,
    // public personService: PersonService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getPeople('');
    this.loadAmount = 50;

    // this.dataSource = new HcTableDataSource(DATA);
    // this.dataSource.sort = this.sort;
  }



  // getPeople(): Observable<Person[]> {
  //   this.personService.getPeople()
  //     .subscribe(people => this.people = {
  //       Id: data['Id'],
  //       GivenName: data['GivenName']
  //     })
  // }
  sortBy(by: string): void {
      this.getPeople(by);
  }

  getPeople(by: string): void {
    // console.log('foo');
    // this.people = [{"Id":1,"GivenName":"Jasmine"},{"Id":2,"GivenName":"Mantissa"},{"Id":3,"GivenName":"Anes"}]
    this.personService.getPeople(by)
      .subscribe(data => {this.people = {
        // people: (data as any).value
        value: (data as any).value,  
        // givenName: (data as any).GivenName,
      };
      // this.dataSource = new HcTableDataSource(this.people.value);
      // this.dataSource.sort = this.sort;
    });
  }

  loadMore(): void {
    this.loadAmount += 50;
    console.log(this.loadAmount);
    // this.getPeople(this.Lmount);
  }

  delete(person: Person): void {
    this.people.value = this.people.value.filter(p => p !== person);
    this.personService.deletePerson(person).subscribe();
  }
}