import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { LoginComponent } from './componentes/login/login.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { SegundobannerComponent } from './componentes/segundobanner/segundobanner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './componentes/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LoginComponent,
    BannerComponent,
    SegundobannerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
