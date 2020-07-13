import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormOcorrenciaComponent } from './form-ocorrencia/form-ocorrencia.component';


const routes: Routes = [
  {path: 'abertura-ocorrencia', component: FormOcorrenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
