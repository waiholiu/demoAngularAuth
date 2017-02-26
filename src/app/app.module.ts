import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AuthenticationService} from './authentication.service';
import {GetvalueService} from './getvalue.service';
import {WebStorageModule, BROWSER_STORAGE_PROVIDERS} from "h5webstorage";
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './auth-guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule.forRoot(),
    WebStorageModule
  ],
  providers: [AuthenticationService,GetvalueService,BROWSER_STORAGE_PROVIDERS, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
