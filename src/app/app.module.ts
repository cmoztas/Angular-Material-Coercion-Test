import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoercionComponent } from './components/coercion/coercion.component';
import { CoercionChildComponent } from './components/coercion-child/coercion-child.component';
import { MyButtonDirective } from './directives/my-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    CoercionComponent,
    CoercionChildComponent,
    MyButtonDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
