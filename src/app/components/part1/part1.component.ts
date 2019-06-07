import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Person, _gender } from '../../includes/Person';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss']
})
export class Part1Component implements OnInit {

  person            : Person;
  anotherPerson     : Person;
  justAnotherPerson : Person;

  genders                   = _gender;
  keys                      = Object.keys;
  personGender              = 'male';
  anotherPersonGender       = 'male';
  justAnotherPersonGender   = 'male';

  public personForm = new FormGroup({
    name    : new FormControl('', [Validators.required]),
    age     : new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(120),
      Validators.pattern('[0-9]+')
    ]),
    gender  : new FormControl('male', [Validators.required]),
    weight  : new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+.[0-9]+')
    ]),
    height  : new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+.[0-9]+')
    ])
  });

  public anotherPersonForm = new FormGroup({
    name    : new FormControl('', [Validators.required]),
    age     : new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(120),
      Validators.pattern('[0-9]+')
    ]),
    gender  : new FormControl('male', [Validators.required]),
    weight  : new FormControl('0.0'),
    height  : new FormControl('0.0')
  });

  public justAnotherPersonForm = new FormGroup({
    name    : new FormControl(),
    age     : new FormControl(),
    gender  : new FormControl(),
    weight  : new FormControl(),
    height  : new FormControl()
  });

  constructor() { }

  ngOnInit() {
    this.personForm.get('gender').setValue(_gender.male);
    this.anotherPersonForm.get('gender').setValue(_gender.male);
    this.justAnotherPersonForm.get('gender').setValue(_gender.male);

    this.justAnotherPerson = new Person();
  }

  createPerson() {
    this.person = new Person(
      this.personForm.get('name').value,
      this.personForm.get('age').value,
      _gender[`${this.personForm.get('gender').value}`],
      this.personForm.get('weight').value,
      this.personForm.get('height').value
    );
  }

  createAnotherPerson() {
    this.anotherPerson = new Person(
      this.anotherPersonForm.get('name').value,
      this.anotherPersonForm.get('age').value,
      _gender[`${this.anotherPersonForm.get('gender').value}`]
    );
  }

  getErrorMessage(el: FormControl) {
    return el.errors.required ? 'You must enter a value' :
      el.errors.max ? `You are out of range: max = ${el.errors.max.max}` :
      el.errors.min ? `You are out of range: min = ${el.errors.min.min}` :
      el.errors.pattern ? `You must enter a valid value: ${el.errors.pattern.requiredPattern}` : '';
  }

  onGenderChange(property, newValue) {
    this[`${property}`].gender = this.genders[newValue];
  }

  onKey(newValue, field, property ) {
    this[`${property}`][`${field}`] = newValue;
  }

}
