import { Component, OnInit } from '@angular/core';

import { Person } from '../person';
import { PersonService } from '../person.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Config } from '../config';
  
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people: Config;
  loadAmount: number;
  
  previousSortBy: string;

  constructor(
    private personService: PersonService,
  ) { }

  ngOnInit(): void {
    this.getPeople('Id');
    this.loadAmount = 50;
    this.previousSortBy = 'Id';
  }

  sortBy(by: string): void {
      if (this.previousSortBy == by) {
      this.people.value = this.people.value.reverse();
    } else {
      switch(by){
        case 'Id':
          this.people.value = this.people.value.sort(
            (a, b) => a.Id > b.Id ? 1 : -1);
          break;
        case 'GivenName':
          this.people.value = this.people.value.sort(
            (a, b) => a.GivenName > b.GivenName ? 1 : -1);
          break;
        case 'Surname':
          this.people.value = this.people.value.sort(
            (a, b) => a.Surname > b.Surname ? 1 : -1);
          break;
        case 'Country':
          this.people.value = this.people.value.sort(
            (a, b) => a.Country > b.Country ? 1 : -1);
          break;
      }
    }
    
    this.previousSortBy = by;
  }

  getPeople(by: string): void {
    this.personService.getPeople(by)
      .subscribe(data => {this.people = {
        value: (data as any).value,  
      };
    });
  }

  loadMore(): void {
    this.loadAmount += 50;
    console.log(this.loadAmount);
  }

  delete(person: Person): void {
    this.people.value = this.people.value.filter(p => p !== person);
    this.personService.deletePerson(person).subscribe();
  }
}