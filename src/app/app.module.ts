
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { UserComponent } from './component/user/user.component';
import { userReducer } from './store/reducers/user.reducer';
import { AppReducers } from './store/state/AppState';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { UserModule } from './component/user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
   // FlexLayoutModule,
    HttpClientModule,
    UserModule,
     StoreModule.forRoot({}),
     StoreDevtoolsModule.instrument({}),
    // EffectsModule.forRoot([UserEffects])
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
