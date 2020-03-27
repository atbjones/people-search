import { Component, OnInit } from '@angular/core';

import { Person } from '../person';
import { PersonService } from '../person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from '../config';
// import { PEOPLE } from '../mock-people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Config;

  constructor(
    private personService: PersonService,
    // public personService: PersonService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getPeople();
  }

  // getPeople(): Observable<Person[]> {
  //   this.personService.getPeople()
  //     .subscribe(people => this.people = {
  //       Id: data['Id'],
  //       GivenName: data['GivenName']
  //     })
  // }

  getPeople(): void {
    // console.log('foo');
    // this.people = [{"Id":1,"GivenName":"Jasmine"},{"Id":2,"GivenName":"Mantissa"},{"Id":3,"GivenName":"Anes"}]
    this.personService.getPeople()
      .subscribe(data => this.people = {
        // people: (data as any).value
        value: (data as any).value,  
        // givenName: (data as any).GivenName,
      });
  }

  // loadMore(): void {
  //   this.amount += 50;
  //   console.log(this.amount);
  //   this.getPeople(this.amount);
  // }

  delete(person: Person): void {
    this.people.value = this.people.value.filter(p => p !== person);
    this.personService.deletePerson(person).subscribe();
  }
}