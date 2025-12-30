import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeaveService } from '@services/leave.service';

@Component({
  selector: 'app-leavepopup',
  templateUrl: './leavepopup.component.html',
  styleUrls: ['./leavepopup.component.css']
})
export class LeavepopupComponent {

  @Output() close = new EventEmitter();

  leaveForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private leaveService: LeaveService) {

    this.leaveForm = this.fb.group({
      employeeName: [{ value: 'venkatesh.v', disabled: true }],
      email: [{ value: 'venkatesh.v@saiservices.com', disabled: true }],
      leaveType: ['', Validators.required],
      manager: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      reason: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  submit() {
    if (this.leaveForm.invalid) {
      this.leaveForm.markAllAsTouched();
      return;
    }

    const payload = {
      ...this.leaveForm.getRawValue()
    };

    this.leaveService.applyLeave(payload);
    this.close.emit();
  }
}
