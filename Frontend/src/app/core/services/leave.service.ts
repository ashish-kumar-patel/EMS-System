import { Injectable } from '@angular/core';
import { LeaveRequest } from '@interfaces/LeaveRequest';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {


  private leaveList = new BehaviorSubject<LeaveRequest[]>([]);
  leaves$ = this.leaveList.asObservable();

  applyLeave(request: LeaveRequest) {
    const current = this.leaveList.getValue();
    request.id = Date.now();
    request.status = "Pending";
    this.leaveList.next([...current, request]);
  }

  updateStatus(id: number, status: 'Approved' | 'Rejected') {
    const updated = this.leaveList.getValue().map(l =>
      l.id === id ? { ...l, status } : l
    );
    this.leaveList.next(updated);
  }
}
