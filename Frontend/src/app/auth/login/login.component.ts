import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;

  // ✅ Static credentials
  private readonly staticEmail = 'demo@gmail.com';
  private readonly staticPassword = '1234';

  constructor(private fb: FormBuilder, private toaster: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  // Getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    var role = 'ADMIN'; // or EMPLOYEE (from backend) ADMIN

    localStorage.setItem('role', role);
    this.submitted = true;
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      if (email === this.staticEmail && password === this.staticPassword) {

        
        localStorage.setItem('role', role);

        this.toaster.success('Login Successful', 'Success');
        console.log('Form Value:', this.loginForm.value);

        // ✅ Redirect to dashboard
        if(role=='ADMIN')
        this.router.navigate(['/admin/dashboard']);
        else{
           this.router.navigate(['/employee/dashboard']);
        }
      }
      else {
        this.toaster.error('Invalid Email or Password', 'Login Failed');
      }



    }
  }

  getErrorMessage(controlName: string) {
    const control = this.loginForm.get(controlName);
    if (control?.hasError('required')) return `${controlName} is required`;
    if (control?.hasError('email')) return 'Invalid email format';
    if (control?.hasError('minlength')) return `Minimum length required`;
    return '';
  }
}
