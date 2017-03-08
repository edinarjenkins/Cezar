import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommonVerticalSetWindowHeightDirective} from './directives';
import {CommonPopupComponent} from './components';

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
  ]
})
export class CommonsModule { }
