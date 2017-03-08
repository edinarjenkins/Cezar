import {Component} from '@angular/core';
import {CommonPopupService} from 'app/commons';

@Component({
  selector: 'app-first-module-root',
  templateUrl: './first-module-root.component.html'
})
export class FirstModuleRootComponent {
  private title = 'firstModuleTitle';
  private content = 'firstModuleConter';
  private fotter = 'firstModuleFooter';

  constructor(private commonsPopup: CommonPopupService) {
  }

  openPopup() {
    this.commonsPopup.setPopupData({
      title: this.title,
      content: this.content,
      footer: this.fotter});
  }

}
