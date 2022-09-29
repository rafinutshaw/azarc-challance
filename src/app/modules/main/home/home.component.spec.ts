import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from "@angular/router/testing";
import { of } from 'rxjs';
import { EmployeeList } from 'src/app/testing/mockData/EmployeeList';
import { SearchFilterPipe } from '../../shared/pipes/search-filter.pipe';
import { EmployeeService } from '../../shared/services/employee.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: EmployeeService
  let routeStub = {
    data: of({ "employees": (EmployeeList) })
  }
  let router
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [HomeComponent, SearchFilterPipe],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{
        provide: ActivatedRoute,
        useValue: routeStub
      }, EmployeeService]
    })
      .compileComponents()
    router = TestBed.inject(Router);

    service = TestBed.inject(EmployeeService)
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Render Properly', () => {
    console.log(component.employees.length)
    expect(document.querySelector('.card')?.textContent).toContain('All employees');

    expect(document.querySelector("input[type=text]")?.getAttribute("placeholder")).toEqual("Search any fields")
    expect(document.querySelector('thead')?.textContent).toContain("#");
    expect(document.querySelector('thead')?.textContent).toContain('Firstname');
    expect(document.querySelector('thead')?.textContent).toContain('Lastname');
    EmployeeList.forEach((item) => {
      expect(document.querySelector('.table')?.textContent).toContain(item.firstName);
      expect(document.querySelector('.table')?.textContent).toContain(item.lastName);
      expect(document.querySelector('.table')?.textContent).toContain(item.id);
    })
    expect(component.employees).toHaveSize(EmployeeList.length)
  });

  it('should search properly', fakeAsync(() => {
    let input = fixture.debugElement.query(By.css('input[type="text"]')).nativeElement
    input.focus()
    input.value = '4';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    tick();
    expect(input.value).toBe('4');
  }));

});