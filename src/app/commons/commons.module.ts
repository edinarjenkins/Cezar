import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommonVerticalSetWindowHeightDirective} from './directives';

import {CommonPopupComponent, CommonPopupService} from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CommonVerticalSetWindowHeightDirective,
    CommonPopupComponent
  ],
  exports: [
    CommonVerticalSetWindowHeightDirective,
    CommonPopupComponent
  ],
  providers: [CommonPopupService]
})
export class CommonsModule { }
