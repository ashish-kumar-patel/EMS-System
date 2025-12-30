import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchEmployee } from '@interfaces/searchemp';


@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {

  viewMode: 'grid' | 'list' = 'grid';
  showRegister = false;

  filterForm!: FormGroup;

  employees: SearchEmployee[] = [];
  filteredEmployees: SearchEmployee[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.filterForm = this.fb.group({
      id: [''],
      name: [''],
      designation: [''],
      department: [''],
      role: ['']
    });

    this.employees = [
      {
        id: 'EMP001',
        name: 'Sai Sai',
        designation: 'Trainee Engineer',
        department: 'QA',
        role: 'Employee',
        experience: '1 year 9 months',
        avatar: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png'
      },
      {
        id: 'EMP002',
        name: 'Sai Kumar',
        designation: 'Senior Software',
        department: 'Tech',
        role: 'Lead',
        experience: '1 year 9 months',
        avatar: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png'
      },
      {
        id: 'EMP003',
        name: 'Admin Admin',
        designation: 'Tech Lead',
        department: 'Admin',
        role: 'Admin',
        experience: '1 year 8 months',
        avatar: 'https://cdn-icons-png.flaticon.com/512/4140/4140061.png'
      },
      {
        id: 'EMP001',
        name: 'Sai Sai',
        designation: 'Trainee Engineer',
        department: 'QA',
        role: 'Employee',
        experience: '1 year 9 months',
        avatar: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png'
      },
      {
        id: 'EMP001',
        name: 'Sai Sai',
        designation: 'Trainee Engineer',
        department: 'QA',
        role: 'Employee',
        experience: '1 year 9 months',
        avatar: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png'
      },  
      {
        id: 'EMP001',
        name: 'Sai Sai',
        designation: 'Trainee Engineer',
        department: 'QA',
        role: 'Employee',
        experience: '1 year 9 months',
        avatar: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png'
      },
    ];

    this.filteredEmployees = [...this.employees];

    this.filterForm.valueChanges.subscribe(() => {
      this.applyFilter();
    });
  }

  closePopup() {
  this.showRegister = false;
}
  applyFilter() {
    const f = this.filterForm.value;

    this.filteredEmployees = this.employees.filter(emp =>
      (!f.id || emp.id.toLowerCase().includes(f.id.toLowerCase())) &&
      (!f.name || emp.name.toLowerCase().includes(f.name.toLowerCase())) &&
      (!f.designation || emp.designation === f.designation) &&
      (!f.department || emp.department === f.department) &&
      (!f.role || emp.role === f.role)
    );
  }

  resetFilter() {
    this.filterForm.reset();
    this.filteredEmployees = [...this.employees];
  }

  toggleView(mode: 'grid' | 'list') {
    this.viewMode = mode;
  }
}
