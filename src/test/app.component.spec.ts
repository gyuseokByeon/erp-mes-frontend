import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from '../app/app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {appRoutes} from '../app/app.routing';
import {TeamComponent} from '../app/team/team.component';
import {TeamsComponent} from '../app/teams/teams.component';
import {EmployeesComponent} from '../app/employees/employees.component';
import {EmployeeComponent} from '../app/employee/employee.component';
import {AddEmployeeComponent} from '../app/add-employee/add-employee.component';
import {FormsModule} from '@angular/forms';
import {AddHolidayComponent} from '../app/add-holiday/add-holiday.component';
import {TasksComponent} from '../app/tasks/tasks.component';
import {TaskComponent} from '../app/task/task.component';
import {AddTaskComponent} from '../app/add-task/add-task.component';
import {ReportsComponent} from "../app/reports/reports.component";
import {ReportComponent} from "../app/report/report.component";
import {CurrentReportComponent} from "../app/current-report/current-report.component";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(appRoutes),
        FormsModule
      ],
      declarations: [
        AppComponent,
        AddEmployeeComponent,
        AddHolidayComponent,
        AddTaskComponent,
        EmployeeComponent,
        EmployeesComponent,
        TeamsComponent,
        TeamComponent,
        TasksComponent,
        TaskComponent,
        ReportsComponent,
        ReportComponent,
        CurrentReportComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
