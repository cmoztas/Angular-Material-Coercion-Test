import { BooleanInput, coerceBooleanProperty, coerceElement, coerceNumberProperty, NumberInput } from '@angular/cdk/coercion';
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'my-button',
  host: {
    '[disabled]': 'disabled',
    '(click)': 'greet()'
  }
})
export class MyButtonDirective {
  // Using `coerceBooleanProperty` allows for the disabled value of a button to be set as
  // `<my-button disabled></my-button>` instead of `<my-button [disabled]="true"></my-button>`.
  // It also allows for a string to be passed like `<my-button disabled="true"></my-button>`.
  @Input()
  get disabled() {return this._disabled;}
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  // `coerceNumberProperty` turns any value coming in from the view into a number, allowing the
  // consumer to use a shorthand string while storing the parsed number in memory. E.g. the consumer can write:
  // `<my-button greetDelay="500"></my-button>` instead of `<my-button [greetDelay]="500"></my-button>`.
  // The second parameter specifies a fallback value to be used if the value can't be
  // parsed to a number.
  @Input()
  get greetDelaySeconds() {return this._greetDelaySeconds;}
  set greetDelaySeconds(value: any) {
    this._greetDelaySeconds = coerceNumberProperty(value * 1000, 0);
  }
  private _greetDelaySeconds = 0;

  greet() {
    setTimeout(() => alert('Hello!'), this.greetDelaySeconds);
  }

  // `coerceElement` allows you to accept either an `ElementRef`
  // or a raw DOM node and to always return a DOM node.
  getElement(elementOrRef: ElementRef<HTMLElement> | HTMLElement): HTMLElement {
    return coerceElement(elementOrRef);
  }
}
