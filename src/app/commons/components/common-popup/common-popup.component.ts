import {Component, OnInit} from '@angular/core';
import {CommonPopupService} from './common-popup.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-common-popup',
  templateUrl: './common-popup.component.html'
})
export class CommonPopupComponent implements OnInit {
  public showPopup;
  public disabledSubmit;
  public title = '';
  public content: SafeHtml;
  public footer = '';

  constructor(private sanitizer: DomSanitizer, private comPopupService: CommonPopupService) {}

  ngOnInit() {
    this.comPopupService.pushData.subscribe( () => {
      const {title, content, footer, disabledSubmit } = this.comPopupService;
      this.title = title;
      this.content = this.sanitizer.bypassSecurityTrustHtml(content);
      this.footer = footer;
      this.disabledSubmit = disabledSubmit;
      this.showPopup = true;
    });

    this.comPopupService.removeData.subscribe( () => {
      this.showPopup = false;
      this.title = '';
      this.content = '';
      this.footer = '';
    });
  }

  closePopup() {
   this.comPopupService.destroyData();
  }

}
