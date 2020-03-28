import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, Validators } from '@angular/forms'

import { Person } from '../person';
import { PersonService } from '../person.service';
import { FormFieldModule } from '@healthcatalyst/cashmere';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {
  selectControl = new FormControl('daily');
  inputControl = new FormControl('');

  invalidForm() {
    this.selectControl.setErrors({incorrect: true});
    this.inputControl.setErrors({incorrect: true});
  }
  personForm;
  @Input() person: Person;

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
    this.getPerson();
  }
  
  goBack(): void {
    this.location.back();
  }
  
  getPerson(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personService.getPerson(id)
    .subscribe(person => {this.person = person;
      this.personForm.get('Gender').setValue(this.person.Gender);
      this.personForm.get('NameSet').setValue(this.person.NameSet);
      this.personForm.get('Title').setValue(this.person.Title);
      this.personForm.get('GivenName').setValue(this.person.GivenName);
      this.personForm.get('MiddleInitial').setValue(this.person.MiddleInitial);
      this.personForm.get('Surname').setValue(this.person.Surname);
      this.personForm.get('StreetAddress').setValue(this.person.StreetAddress);
      this.personForm.get('City').setValue(this.person.City);
      this.personForm.get('State').setValue(this.person.State);
      this.personForm.get('StateFull').setValue(this.person.StateFull);
      this.personForm.get('ZipCode').setValue(this.person.ZipCode);
      this.personForm.get('Country').setValue(this.person.Country);
      this.personForm.get('CountryFull').setValue(this.person.CountryFull);
      this.personForm.get('EmailAddress').setValue(this.person.EmailAddress);
      this.personForm.get('Username').setValue(this.person.Username);
      this.personForm.get('Password').setValue(this.person.Password);
      this.personForm.get('BrowserUserAgent').setValue(this.person.BrowserUserAgent);
      this.personForm.get('TelephoneNumber').setValue(this.person.TelephoneNumber);
      this.personForm.get('TelephoneCountryCode').setValue(this.person.TelephoneCountryCode);
      this.personForm.get('MothersMaiden').setValue(this.person.MothersMaiden);
      this.personForm.get('Birthday').setValue(this.person.Birthday);
      this.personForm.get('Age').setValue(this.person.Age);
      this.personForm.get('TropicalZodiac').setValue(this.person.TropicalZodiac);
      this.personForm.get('CCType').setValue(this.person.CCType);
      this.personForm.get('CCNumber').setValue(this.person.CCNumber);
      this.personForm.get('CVV2').setValue(this.person.CVV2);
      this.personForm.get('CCExpires').setValue(this.person.CCExpires);
      this.personForm.get('NationalID').setValue(this.person.NationalID);
      this.personForm.get('UPS').setValue(this.person.UPS);
      this.personForm.get('WesternUnionMTCN').setValue(this.person.WesternUnionMTCN);
      this.personForm.get('MoneyGramMTCN').setValue(this.person.MoneyGramMTCN);
      this.personForm.get('Color').setValue(this.person.Color);
      this.personForm.get('Occupation').setValue(this.person.Occupation);
      this.personForm.get('Company').setValue(this.person.Company);
      this.personForm.get('Vehicle').setValue(this.person.Vehicle);
      this.personForm.get('Domain').setValue(this.person.Domain);
      this.personForm.get('BloodType').setValue(this.person.BloodType);
      this.personForm.get('Pounds').setValue(this.person.Pounds);
      this.personForm.get('Kilograms').setValue(this.person.Kilograms);
      this.personForm.get('FeetInches').setValue(this.person.FeetInches);
      this.personForm.get('Centimeters').setValue(this.person.Centimeters);
      this.personForm.get('GUID').setValue(this.person.GUID);
      this.personForm.get('Latitude').setValue(this.person.Latitude);
      this.personForm.get('Longitude').setValue(this.person.Longitude);
    });
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
    this.personService.updatePerson(this.person).subscribe(() => this.goBack())
  }
}
