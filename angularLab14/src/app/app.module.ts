import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
import { HttpModule } from '@angular/http';
import { FormsModule,FormGroup,FormBuilder } from '@angular/forms';

import { Observable } from "rxjs/Rx";

@NgModule({
  declarations: [
    AppComponent,
    DataDrivenComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
