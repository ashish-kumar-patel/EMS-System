import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient,HttpClientModule } from '@angular/common/http';
// Angular Material imports
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminnavbarComponent } from './components/adminsidenavbar/adminnavbar.component';
import { EmployeenavbarComponent } from './components/employeesidenavbar/employeenavbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { RegisterempComponent } from './components/registeremp/registeremp.component';
// import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AdminnavbarComponent,
    EmployeenavbarComponent,
    RegisterempComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // Required for Angular Material
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatRadioModule,
    MatCheckboxModule,
    ToastrModule.forRoot({
      timeOut: 2000,           // Toast duration in ms
      positionClass: 'toast-bottom-right', // Position: see list below
      preventDuplicates: true,       // Prevent showing the same toast multiple times
      progressBar: true,             // Show a progress bar
      progressAnimation: 'increasing', // 'decreasing' | 'increasing'
      closeButton: true,             // Show a close ("x") button
      newestOnTop: true,             // New toasts appear on top
      tapToDismiss: true,            // Click on toast to dismiss
      enableHtml: false,             // Allow HTML in message
      maxOpened: 5,                  // Maximum number of toasts visible at once
      autoDismiss: true,
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
