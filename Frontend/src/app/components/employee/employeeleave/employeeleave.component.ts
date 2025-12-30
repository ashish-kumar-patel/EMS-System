import { Component } from '@angular/core';
import { LeaveRequest } from '@interfaces/LeaveRequest';
import { LeaveService } from '@services/leave.service';

@Component({
  selector: 'app-employeeleave',
  templateUrl: './employeeleave.component.html',
  styleUrls: ['./employeeleave.component.css']
})
export class EmployeeleaveComponent {
 leaves: LeaveRequest[] = [];
  showPopup = false;

  constructor(private leaveService: LeaveService) {}

  ngOnInit(): void {
    this.leaveService.leaves$.subscribe(res => {
      this.leaves = res.filter(x => x.email === "employee@mail.com");
    });
  }

  openForm() { this.showPopup = true; }
  closeForm() { this.showPopup = false; }
}
