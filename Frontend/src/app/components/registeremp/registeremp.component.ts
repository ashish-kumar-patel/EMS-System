import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Employee } from '@interfaces/registeremp'
import { RegisterempserviceService } from '@services/registerempservice.service';


@Component({
  selector: 'app-registeremp',
  templateUrl: './registeremp.component.html',
  styleUrls: ['./registeremp.component.css']
})
export class RegisterempComponent {

  empForm!: FormGroup;

  // Arrays for dropdowns
  roles: string[] = ['Admin', 'Manager', 'Staff'];
  designations: string[] = ['Team Lead', 'Senior Developer', 'Junior Developer', 'Intern'];
  departments: string[] = ['HR', 'Finance', 'IT', 'Marketing'];
  managers: string[] = ['John Doe', 'Jane Smith', 'Robert Brown'];

  selectedFile!: File;

  constructor(private fb: FormBuilder, private empService:RegisterempserviceService, private toaster:ToastrService) {}

  ngOnInit(): void {
    this.empForm = this.fb.group({
      // PERSONAL DETAILS
      firstName: ['', Validators.required],
      lastName: [''],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],

      // CONTACT DETAILS
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required,]],

      // ADDRESS DETAILS
      addressLane1: [''],
      addressLane2: [''],
      city: [''],
      state: [''],

      // DOCUMENT DETAILS
      aadharNo: [''],
      panNo: [''],
      passportNo: [''],
      passportExpDate: [''],

      // BANK DETAILS
      salaryBank: [''],
      accountNumber: [''],
      ifscCode: [''],
      accountType: [''],

      // ROLE & STATUS
      role: ['', Validators.required],
      designation: ['', Validators.required],
      department: ['', Validators.required],
      reportingManager: ['', Validators.required],
      joiningDate: ['', Validators.required],
      isActive: ['', Validators.required],
      profile: [null]
    });
  }

  // File change event
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
      this.empForm.patchValue({
        profile: this.selectedFile
      });
    }
  }

  // Submit form
  submit() {
    if (this.empForm.invalid) return;
    console.log(this.empForm.value);
    

    const formData: Employee = { ...this.empForm.value };
    this.empService.addEmployee(formData).subscribe({
      next: (res) => {
        console.log('Employee added:', res);
         this.toaster.success('Employee added successfully!', 'Login Success');
        
        this.empForm.reset();
      },
      error: (err) => {
          this.toaster.error("Something Went Wrong","Error");
        console.error(err)
      }
    });
  }

  closeForm() {
    this.empForm.reset();
  }
}