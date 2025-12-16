import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   loginForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,private toaster:ToastrService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.valid) {
     
      console.log('Form Value:', this.loginForm.value);
        this.toaster.success('You have logged in successfully!', 'Login Success');
      // Add your login API call here
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
