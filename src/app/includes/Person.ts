export enum _gender {
    male = 'M',
    female = 'F'
}

enum BMI {
  underweight = -1,
  normal = 0,
  overweight = 1
}

export class Person {
    private _name    : string = '';
    private _age     : number = 0;
    private _ssn     : string = '';
    private _gender  : _gender;
    private _weight  : number = 0.0;
    private _height  : number = 0.0;

    constructor()
    constructor(name: string, age: number, gender: _gender)
    constructor(name: string, age: number, gender: _gender, weight: number, height: number)
    constructor(name?: string, age?: number, gender?: _gender, weight?: number, height?: number) {
        if (name) this._name = name;
        if (age) this._age = age;
        if (gender) {
          this._gender = gender;
        } else {
          this._gender = _gender.male;
        }
        if (weight) this._weight = weight;
        if (height) this._height = height;

        this._ssn = this.generateSSN();
    }

    set name(name: string) {
      this._name = name;
    }

    set age(age: number) {
      this._age = age
    }

    set gender(gender: _gender) {
      this._gender = gender;
    }

    set weight(weight: number) {
      this._weight = weight;
    }

    set height(height: number) {
      this._height = height;
    }

    calculateBMI(): BMI {
      const index = this._weight / Math.pow(this._height, 2);

      if (this._gender == _gender.male) {
        if (index > 25) {
          return BMI.overweight;
        } else if (index < 20) {
          return BMI.underweight;
        }
      } else {
        if (index > 24) {
          return BMI.overweight;
        } else if (index < 19) {
          return BMI.underweight;
        }
      }

      return BMI.normal;
    }

    isAdult(): boolean {
      return (this._age <= 18) ? false : true;
    }

    private checkGender(gender: _gender): boolean {
      return (this._gender === gender) ? true : false;
    }

    toString(): string {
      return JSON.stringify(this);
    }

    private generateSSN(): string {
      let ssn: string = '';
      for (let index = 0; index < 3; index++) {
        const random_ascii = Math.floor((Math.random() * (65 - 90)) + 90);
        ssn += String.fromCharCode(random_ascii)
      }
      for (let index = 0; index < 8; index++) {
        const random_number = Math.floor(Math.random() * 9) + 0;
        ssn += random_number;
      }

      return ssn;
    }
}
