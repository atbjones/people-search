import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  @Input() person: Person;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personService.getPerson(id)
      .subscribe(person => this.person = person);
  }

  goBack(): void {
    this.location.back();
  }

  delete(): void {
    var response = confirm(`Are you sure you want to remove 
      ${this.person.GivenName} ${this.person.Surname}?`);
    if (response) {
      this.personService.deletePerson(this.person)
        .subscribe(() => this.goBack());
    }
  }
}
