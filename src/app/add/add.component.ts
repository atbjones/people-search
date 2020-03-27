import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, Validators } from '@angular/forms'

import { Person } from '../person';
import { PersonService } from '../person.service';
import { FormFieldModule } from '@healthcatalyst/cashmere';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  selectControl = new FormControl('daily');
  inputControl = new FormControl('');

  invalidForm() {
    this.selectControl.setErrors({incorrect: true});
    this.inputControl.setErrors({incorrect: true});
  }
  personForm;
  person: Person;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService,
    private location: Location,
    private formBuilder: FormBuilder,
    private formField: FormFieldModule,
  ) {
    this.personForm = this.formBuilder.group({
      Gender: [''],
      NameSet: [''],
      Title: [''],
      GivenName: ['', Validators.required],
      MiddleInitial: [''],
      Surname: [''],
      StreetAddress: [''],
      City: [''],
      State: [''],
      StateFull: [''],
      ZipCode: [''],
      Country: [''],
      CountryFull: [''],
      EmailAddress: [''],
      Username: [''],
      Password: [''],
      BrowserUserAgent: [''],
      TelephoneNumber: [''],
      TelephoneCountryCode: [],
      MothersMaiden: [''],
      Birthday: [],
      Age: [],
      TropicalZodiac: [''],
      CCType: [''],
      CCNumber: [''],
      CVV2: [''],
      CCExpires: [''],
      NationalID: [''],
      UPS: [''],
      WesternUnionMTCN: [''],
      MoneyGramMTCN: [''],
      Color: [''],
      Occupation: [''],
      Company: [''],
      Vehicle: [''],
      Domain: [''],
      BloodType: [''],
      Pounds: [],
      Kilograms: [],
      FeetInches: [''],
      Centimeters: [],
      GUID: [''],
      Latitude: [],
      Longitude: [],
    })
  }

  ngOnInit(): void {
    this.person = {} as Person;
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(personData): void {
    this.person.Gender = personData.Gender;
    this.person.NameSet = personData.NameSet;
    this.person.Title = personData.Title;
    this.person.GivenName = personData.GivenName;
    this.person.MiddleInitial = personData.MiddleInitial;
    this.person.Surname = personData.Surname;
    this.person.StreetAddress = personData.StreetAddress;
    this.person.City = personData.City;
    this.person.State = personData.State;
    this.person.StateFull = personData.StateFull;
    this.person.ZipCode = personData.ZipCode
    this.person.Country = personData.Country;
    this.person.CountryFull = personData.CountryFull;
    this.person.EmailAddress = personData.EmailAddress;
    this.person.Username = personData.Username;
    this.person.Password = personData.Password;
    this.person.BrowserUserAgent = personData.BrowserUserAgent;
    this.person.TelephoneNumber = personData.TelephoneNumber;
    this.person.TelephoneCountryCode = +personData.TelephoneCountryCode;
    this.person.MothersMaiden = personData.MothersMaiden;
    this.person.Birthday = personData.Birthday;
    this.person.Age = +personData.Age;
    this.person.TropicalZodiac = personData.TropicalZodiac;
    this.person.CCType = personData.CCType;
    this.person.CCNumber = personData.CCNumber;
    this.person.CVV2 = personData.CVV2;
    this.person.CCExpires = personData.CCExpires;
    this.person.NationalID = personData.NationalID;
    this.person.UPS = personData.UPS;
    this.person.WesternUnionMTCN = personData.WesternUnionMTCN;
    this.person.MoneyGramMTCN = personData.MoneyGramMTCN;
    this.person.Color = personData.Color;
    this.person.Occupation = personData.Occupation;
    this.person.Company = personData.Company;
    this.person.Vehicle = personData.Vehicle;
    this.person.Domain = personData.Domain;
    this.person.BloodType = personData.BloodType;
    this.person.Pounds = +personData.Pounds;
    this.person.Kilograms = +personData.Kilograms;
    this.person.FeetInches = personData.FeetInches;
    this.person.Centimeters = +personData.Centimeters;
    this.person.GUID = personData.GUID;
    this.person.Latitude = +personData.Latitude;
    this.person.Longitude = +personData.Longitude
    // for (const field in this.personForm.controls) {
    //   if (TCC, age, pounds, kgs, cm, lat, lon)
    //     this.person.field = +personData.field;
    //   else
    //     this.person.field = personData.field;
    // }
    this.personService.addPerson(this.person).subscribe(() => this.goBack())
  }
}
