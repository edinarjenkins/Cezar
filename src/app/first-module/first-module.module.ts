import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirstModuleRootComponent} from './components';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FirstModuleRootComponent],
  exports: [FirstModuleRootComponent]
})
export class FirstModuleModule { }
