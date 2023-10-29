import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgUiList,SelectLetterService} from '../../../ng-ui-list/src/public-api';
import { AppComponent } from './app.component';
 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgUiList.forRoot({offset:0}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
