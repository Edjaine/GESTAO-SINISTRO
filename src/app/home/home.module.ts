import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingComponent } from './singin/singin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
