import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './pages/shared/shared.mudule';
import { NgZorroModule } from './pages/shared/ng-zorro-module';
import { AuthGuard } from './components/guard/auth.guard';
import { CoreService } from './services/core.service';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './components/guard/auth.interceptor';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    SharedModule,
    NgZorroModule
  ],
  providers: [
    AuthGuard,
    CoreService,
    DataService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
