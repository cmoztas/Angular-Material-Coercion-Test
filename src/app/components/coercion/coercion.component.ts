import { BooleanInput, coerceBooleanProperty, coerceElement, coerceNumberProperty, NumberInput } from '@angular/cdk/coercion';
import { Component, Directive, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coercion',
  templateUrl: './coercion.component.html',
  styleUrls: ['./coercion.component.scss']
})
export class CoercionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
