import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms'

import { Person } from '../person';
import { PersonService } from '../person.service';
import { 
  HcToasterService, 
  HcToastOptions, 
  HcToastRef 
} from '@healthcatalyst/cashmere';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  personForm;
  person: Person;

  toastHeader: string = 'Success!';
  toastBody: string = '';
  toastPosition: string = 'top-right';
  toastTimeout: number = 5000;
  toastClick: boolean = false;
  toastType: string = 'success';
  toastWidth: number = 400;
  toastProgress: string = '0';
  progressValue: number = 75;

  constructor(
    private personService: PersonService,
    private location: Location,
    private formBuilder: FormBuilder,
    private toasterService: HcToasterService,
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
    if( personData.GivenName == ''){
      // Do Nothing
    } else {
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

      this.personService.addPerson(this.person).subscribe(newPerson => {
        this.toastBody = `Added ${newPerson.GivenName}. Id: ${newPerson.Id}`
        this.showToast();
      })
    }
  }

  showToast() {
    let showProgress = false;
    if (parseInt(this.toastProgress, 10) > 0) {
      showProgress = true;
    }

    let toastOutput: HcToastRef;
    let options: HcToastOptions = {
      header: this.toastHeader,
      body: this.toastBody,
      position: this.toastPosition,
      timeout: this.toastTimeout,
      clickDismiss: this.toastClick,
      type: this.toastType,
      width: this.toastWidth,
      hasProgressBar: showProgress
    };

    toastOutput = this.toasterService.addToast(options);

    if (this.toastProgress === '2') {
        toastOutput.progress = this.progressValue;
    }
  }
}
