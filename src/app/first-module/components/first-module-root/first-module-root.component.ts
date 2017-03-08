import {Component, OnInit} from '@angular/core';
import {CommonPopupService} from 'app/commons';

@Component({
  selector: 'app-first-module-root',
  templateUrl: './first-module-root.component.html'
})
export class FirstModuleRootComponent implements OnInit {

  constructor(private commonsPopup: CommonPopupService) {
    console.log('commonsPopup', commonsPopup);
  }

  ngOnInit() {}

}
