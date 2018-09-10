import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {QueryBuilderContentComponent} from './query-builder-content/query-builder-content.component';
import {QueryBuilderComponent} from './query-builder/query-builder.component';
import {FormsModule} from "@angular/forms";
import {Utils} from "./utils";
import { AppComponent } from './app/app.component';


@NgModule({
  declarations: [
    QueryBuilderContentComponent,
    QueryBuilderComponent,
    AppComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: [
    Utils
  ]
})
export class AppModule {

}
