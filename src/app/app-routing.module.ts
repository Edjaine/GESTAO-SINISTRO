import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormOcorrenciaComponent } from './form-ocorrencia/form-ocorrencia.component';
import { SingComponent } from './home/singin/singin.component';


const routes: Routes = [
  {
    path: 'abertura-ocorrencia', component: FormOcorrenciaComponent
  },
  {
    path: '', component: SingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
