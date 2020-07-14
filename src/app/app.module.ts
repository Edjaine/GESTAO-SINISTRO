import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormOcorrenciaComponent } from './form-ocorrencia/form-ocorrencia.component';
import { HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    FormOcorrenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
