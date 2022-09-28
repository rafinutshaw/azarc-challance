import { NgModule } from '@angular/core';
import { NgImgComponent } from './ng-img/ng-img.component';

const components = [
  NgImgComponent
];

@NgModule({
  declarations: components,
  exports: components
})
export class NgComponentsModule { }
