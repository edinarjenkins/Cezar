import {Component, OnInit} from '@angular/core';
import {CommonPopupService} from './common-popup.service';

@Component({
  selector: 'app-common-popup',
  templateUrl: './common-popup.component.html'
})
export class CommonPopupComponent implements OnInit {
  public title = '';
  public content =  '';
  public footer = '';

  constructor(private comPopupService: CommonPopupService) { }

  ngOnInit() {
    this.comPopupService.eventEmitter.subscribe( () => {
      this.title = this.comPopupService.title;
      this.content = this.comPopupService.content;
      this.footer = this.comPopupService.footer;
    });
  }

}
