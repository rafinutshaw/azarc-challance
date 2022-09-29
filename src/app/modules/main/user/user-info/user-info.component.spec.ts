import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { UserService } from 'src/app/modules/shared/services/user.service';
import { OfficeLocations } from 'src/app/testing/mockData/OfficeLocations';
import { UserInfo } from 'src/app/testing/mockData/UserInfo';

import { UserInfoComponent } from './user-info.component';

describe('UserInfosComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;
  let routeStub = {
    data: of({ "userInfo": (UserInfo) })
  }
  let router

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [UserInfoComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [{
        provide: ActivatedRoute,
        useValue: routeStub
      }, UserService]
    })
      .compileComponents();
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Properly', () => {
    expect(document.querySelector('.userPhoto')?.nextElementSibling?.textContent).toContain(UserInfo.firstName + ' ' + UserInfo.lastName);
    let img = fixture.debugElement.query(By.css('.userPhoto')).nativeElement

    expect(img.src).toContain(UserInfo.photoUrl);

    expect(document.querySelector('label[for="residentialAddress"]')?.textContent).toContain('Residential Address');
    let residentialAddress = fixture.debugElement.query(By.css('#residentialAddress')).nativeElement
    expect(residentialAddress.value).toBe(UserInfo.residentialAddress)

    expect(document.querySelector('label[for="officeAddress"]')?.textContent).toContain('Office Location');
    let officeAddress = fixture.debugElement.query(By.css('#officeAddress')).nativeElement
    expect(officeAddress.value).toBe(UserInfo.officeAddress)

    let options = fixture.debugElement.queryAll(By.css('option'))
    const availableOptions = ['', ...OfficeLocations]
    for (let i = 0; i < options.length; i++) {
      expect(options[i].nativeElement.value).toBe(availableOptions[i])
    }

    expect(document.querySelector('button')?.textContent).toContain('Save Changes');
  });

  it('should submit Properly', fakeAsync(() => {
    let residentialAddress = fixture.debugElement.query(By.css('#residentialAddress')).nativeElement
    residentialAddress.focus()
    residentialAddress.value = 'my home';
    residentialAddress.dispatchEvent(new Event('change'))

    let officeAddress = fixture.debugElement.query(By.css('#officeAddress')).nativeElement
    officeAddress.focus()

    officeAddress.value = 'London';
    officeAddress.dispatchEvent(new Event('change'))

    residentialAddress.focus()

    fixture.detectChanges()
    tick()
  }));
});
