import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Person } from '../person';
import { PersonService } from '../person.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-people-search',
  templateUrl: './people-search.component.html',
  styleUrls: ['./people-search.component.css']
})
export class PeopleSearchComponent implements OnInit {
  people: Config;
  private searchTerms = new Subject<string>();
  loadAmount: number;

  constructor(private personService: PersonService) { }

  search(term: string): void {
    this.searchTerms.next(term)
  }

  ngOnInit(): void {
    this.loadAmount = 50;
    this.people = this.searchTerms.pipe(
      //wait 300ms after each keystroke before considering the term
      debounceTime(300),
        
      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.personService.searchPeople(term))
      ).subscribe(data => this.people = {
        value: (data as any).value,
      });
  }

  delete(person: Person): void {
    this.people.value = this.people.value.filter(p => p !== person);
    this.personService.deletePerson(person).subscribe();
  }

  loadMore(): void {
    this.loadAmount += 50;
    console.log(this.loadAmount);
  }

  confirm(person: Person): void {
    var response = confirm(`Are you sure you want to remove 
      ${person.GivenName}?`);
    if (response) {
      this.delete(person);
    }
  }
}
