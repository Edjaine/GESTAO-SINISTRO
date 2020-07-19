import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingComponent } from './singin/singin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './../core/auth.service';
import { TokenService } from './../core/token.service';

@NgModule({
  declarations: [
    SingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    TokenService
  ]
})
export class HomeModule { }
