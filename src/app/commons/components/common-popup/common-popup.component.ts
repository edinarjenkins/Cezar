import {Component, OnInit} from '@angular/core';
import {CommonPopupService} from './common-popup.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-common-popup',
  templateUrl: './common-popup.component.html'
})
export class CommonPopupComponent implements OnInit {
  public title = '';
  public content: SafeHtml;
  public footer = '';

  constructor(private sanitizer: DomSanitizer, private comPopupService: CommonPopupService) {}

  ngOnInit() {
    this.comPopupService.eventEmitter.subscribe( () => {
      this.title = this.comPopupService.title;
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.comPopupService.content);
      this.footer = this.comPopupService.footer;
    });
  }

}
