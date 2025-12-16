export interface Employee {
  firstName: string;
  lastName?: string;
  gender: string;
  dateOfBirth: string;
  email: string;
  mobileNo: string;
  addressLane1?: string;
  addressLane2?: string;
  city?: string;
  state?: string;
  aadharNo?: string;
  panNo?: string;
  passportNo?: string;
  passportExpDate?: string;
  salaryBank?: string;
  accountNumber?: string;
  ifscCode?: string;
  accountType?: string;
  role: string;
  designation: string;
  department: string;
  reportingManager: string;
  joiningDate: string;
  isActive: string;
  profile?: File;
}
