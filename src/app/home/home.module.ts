import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingComponent } from './singin/singin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './../core/auth.service';
import { HttpClientModule } from '@angular/common/http';

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
    AuthService
  ]
})
export class HomeModule { }
