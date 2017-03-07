import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommonVerticalSetWindowHeightDirective} from './directives';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CommonVerticalSetWindowHeightDirective],
  exports: [CommonVerticalSetWindowHeightDirective]
})
export class CommonsModule { }

