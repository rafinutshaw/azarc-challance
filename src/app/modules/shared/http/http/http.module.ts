import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Interceptor } from '../http.interceptor';
import { HttpService } from '../services/http.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class HttpModule {
  static forRoot(): ModuleWithProviders<HttpModule> {
    return {
      ngModule: HttpModule,

      providers: [
        HttpService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: Interceptor,
          multi: true,
        }
      ]
    };
  }
}
