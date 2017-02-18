import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HomeComponent } from './Component/home.component'; //import home components
import { HsnComponent} from './Component/hsn.component'; //import about component
import { routing }  from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing ], //other modules the app depends on
  declarations: [ AppComponent, HsnComponent, HomeComponent ], // declare all derectives and components
  bootstrap : [ AppComponent ] // root component to bootstarp
})
export class AppModule { }