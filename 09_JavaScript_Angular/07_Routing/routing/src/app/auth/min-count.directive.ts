import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMinCount]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinCountDirective,
      multi: true
    }
  ]
})
export class MinCountDirective implements Validator {

  @Input() appMinCount: number | undefined;

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (this.appMinCount === undefined || 
      (control.value?.length || 0) >= this.appMinCount) { return null; }
    return {
      appMinCount: this.appMinCount
    }
  }

  // registerOnValidatorChange?(fn: () => void): void {
  //   throw new Error('Method not implemented.');
  // }

}
