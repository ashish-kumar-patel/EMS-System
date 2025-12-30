import { Component } from '@angular/core';
import { LeaveRequest } from '@interfaces/LeaveRequest';
import { LeaveService } from '@services/leave.service';

@Component({
  selector: 'app-adminleaverequest',
  templateUrl: './adminleaverequest.component.html',
  styleUrls: ['./adminleaverequest.component.css']
})
export class AdminleaverequestComponent {

  leaves: LeaveRequest[] = [];

  constructor(private leaveService: LeaveService) {}

  ngOnInit(): void {
    this.leaveService.leaves$.subscribe(res => this.leaves = res);
  }

  update(id: number, status: 'Approved' | 'Rejected') {
    this.leaveService.updateStatus(id, status);
  }
}
