import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirstModuleRootComponent} from './components';
import {CommonsModule} from 'app/commons';

@NgModule({
  imports: [
    CommonModule,

    CommonsModule
  ],
  declarations: [FirstModuleRootComponent],
  exports: [FirstModuleRootComponent]
})
export class FirstModuleModule { }
