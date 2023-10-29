import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component';
import {  NgAlphabeticalListModule } from '../../../ng-ui-list/src/public-api';
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgAlphabeticalListModule.forRoot({offset: 122}) ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
