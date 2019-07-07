import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from 'src/app/store/effects/user.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from 'src/app/store/state/AppState';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
     
    ],
    imports: [
      
      StoreModule.forFeature('app', AppReducers),
      StoreDevtoolsModule.instrument({}),
      EffectsModule.forRoot([UserEffects])
      
    ],
    // exports : [
    //     UserModule
    // ]  
    
   
  })
  export class UserModule { }