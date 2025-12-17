import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  isEditMode = false;
  activeTab = 'basic';

  profileForm!: FormGroup;

  profile = {
    name: 'Venkatesh V',
    empCode: 'SAIS007',
    designation: 'Tech Lead',
    doj: '2023-10-01',
    experience: '2 years 2 months',
    email: 'venkatesh.v@saisservices.com',
    phone: '9848021111',
    dob: '2023-10-05',
    gender: 'Male',
    role: 'Admin',
    address1: 'Pragathinagar, Hyderabad',
    address2: 'Guntur',
    reportingManager: 'Naresh',
    probation: 'No',
    photo: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png'
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: [this.profile.name],
      email: [this.profile.email],
      phone: [this.profile.phone],
      dob: [this.profile.dob],
      gender: [this.profile.gender],
      address1: [this.profile.address1],
      address2: [this.profile.address2]
    });
  }

  enableEdit() {
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.profileForm.patchValue(this.profile);
  }

  saveProfile() {
    this.profile = { ...this.profile, ...this.profileForm.value };
    this.isEditMode = false;
  }

  changeTab(tab: string) {
    this.activeTab = tab;
  }
}
