import { Component } from '@angular/core';

@Component({
  selector: 'app-admindashboad',
  templateUrl: './admindashboad.component.html',
  styleUrls: ['./admindashboad.component.css']
})
export class AdmindashboadComponent {
cards = [
{ label: 'Total Departments', value: 6, icon: 'bi-building', bg: 'bg-teal' },
{ label: 'Total Employees', value: 24, icon: 'bi-people', bg: 'bg-blue' },
{ label: 'In Progress Tasks', value: 5, icon: 'bi-hourglass-split', bg: 'bg-orange' },
{ label: 'Completed Tasks', value: 12, icon: 'bi-check-circle', bg: 'bg-purple' }
];


activities = [
'Employee John added',
'Department HR updated',
'Task assigned to Marketing'
];


approvals = [
'Leave Request - Alice',
'Expense Claim - Bob'
];
}
