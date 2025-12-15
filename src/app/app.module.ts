import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Angular Material imports
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminnavbarComponent } from './components/adminsidenavbar/adminnavbar.component';
import { EmployeenavbarComponent } from './components/employeesidenavbar/employeenavbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    AdminnavbarComponent,
    EmployeenavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // Required for Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
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
