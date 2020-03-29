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
  // people$: Observable<Config>;
  private searchTerms = new Subject<string>();
  // term: string;
  by: string;
  loadAmount: number;

  constructor(private personService: PersonService) { }

  // Push a search term into the observalble stream.
  search(term: string): void {
    // this.term = term;
    // console.log("searched");
    this.searchTerms.next(term)
    // this.searchTerms.subscribe(
    //   data => this.people = {
    //     value: (data as any).value,
    // });
    // this.people.value = this.people$;
  }
  sortby(by: string): void {
    this.by = by;
  }

  ngOnInit(): void {
    this.by = "Name";
    this.loadAmount = 50;
    // this.term = "";
    // this.searchPeople();
    this.people = this.searchTerms.pipe(
      //wait 300ms after each keystroke before considering the term
      debounceTime(300),
        
      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.personService.searchPeople(this.by, term)
      // .subscribe(data => this.people = {
      //   value: (data as any).value,
      // });
      ),
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
    // this.getPeople(this.Lmount);
  }

  confirm(person: Person): void {
    var response = confirm(`Are you sure you want to remove ${person.GivenName}?`);
    if (response) {
      this.delete(person);
    }
  }

  // searchPeople(): void {
  //   this.PersonService.searchPeople(this.by, this.term)
  //     .subscribe(data => this.people = {
  //       value: (data as any).value,
  //     });
  // }
}
