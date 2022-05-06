import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoercionComponent } from './components/cdk/coercion/coercion.component';
import { CoercionChildComponent } from './components/cdk/coercion-child/coercion-child.component';

@NgModule({
  declarations: [
    AppComponent,
    CoercionComponent,
    CoercionChildComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
