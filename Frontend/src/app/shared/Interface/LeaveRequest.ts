export interface LeaveRequest {
  id: number;
  employeeName: string;
  email: string;
  leaveType: string;
  fromDate: string;
  toDate: string;
  manager: string;
  reason: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}
