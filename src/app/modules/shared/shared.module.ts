import { GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { UserService } from 'src/app/modules/shared/services/user.service';
import { environment } from 'src/environments/environment';
import { HttpModule } from './http/http/http.module';
import { NgComponentsModule } from './ng-components/ng-components.module';

const services = [
  UserService,
  {
    provide: "SocialAuthServiceConfig",
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            environment.clientId
          )
        }
      ]
    } as SocialAuthServiceConfig
  }
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpModule.forRoot(),
  ],
  exports: [
    NgComponentsModule,

  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: services
    };
  }
}
