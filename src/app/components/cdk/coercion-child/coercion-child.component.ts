import { Component, Input, OnInit } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-coercion-child',
  templateUrl: './coercion-child.component.html',
  styleUrls: ['./coercion-child.component.scss']
})
export class CoercionChildComponent implements OnInit {

  _isAdmin!: boolean;
  _isSuperAdmin!: boolean;

  @Input()
  set isAdmin(value: any) {
    this._isAdmin = coerceBooleanProperty(value);
  }
  get isAdmin() {
    return this._isAdmin;
  }

  @Input()
  set isSuperAdmin(value: any) {
    this._isSuperAdmin = coerceBooleanProperty(value);
  }
  get isSuperAdmin() {
    return this._isSuperAdmin;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
