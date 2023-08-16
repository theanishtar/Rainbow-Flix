// import { Injectable } from '@angular/core';
// import { ValidatorFn, AbstractControl } from '@angular/forms';
// import { FormGroup } from '@angular/forms';
// @Injectable({
//   providedIn: 'root'
// })
// export class ValidatorService {
//   emailValidator = (): ValidatorFn => {
//     return (control: AbstractControl): {[key: string]: string} => {
//       const result = (/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/).test(control.value);
//       return result==true ? null : {'error': 'wrong email format'};
//     }
//   };

//   constructor() { }
// }
