import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/security/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { SharedService } from './services/shared.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './components/security/login/auth.interceptor';
import { AuthGuard } from './components/security/login/auth.guard';
import { CredorNewComponent } from './components/credor-new/credor-new.component';
import { CredorService } from './services/credor.service';
import { IConfig, NgxMaskDirective, NgxMaskPipe, provideEnvironmentNgxMask, provideNgxMask } from 'ngx-mask';
import { CredorListComponent } from './components/credor-list/credor-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationDialog } from './api/confirmation-dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    CredorNewComponent,
    CredorListComponent,
    ConfirmationDialog
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routes,
    FormsModule,
    NgxMaskDirective, 
    NgxMaskPipe, BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [UserService, SharedService, AuthGuard, CredorService, provideNgxMask(), provideEnvironmentNgxMask(),
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
