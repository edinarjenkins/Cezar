import {Injectable, EventEmitter} from '@angular/core';

interface ICommontPopupItem {
  title: string;
  content: string;
  footer: string;
};

@Injectable()
abstract class AbstractCommonPopupService {
  public eventEmitter = new EventEmitter<any>();
  private _title = 'unknown title';
  private _content = 'unknown content';
  private _footer = 'unknown footer';

  public setPopupData(popupItem: ICommontPopupItem) {

    const {title, content, footer} = popupItem;
    this.title = title;
    this.content = content;
    this.footer = footer;
    this.eventEmitter.emit('change service');
  }

  set title(value: string) {
    this._title = value;
  }

  get title(): string {
    return this._title;
  }


  set content(value: string) {
    this._content = value;
  }

  get content(): string {
    return this._content;
  }


  set footer(value: string) {
    this._footer = value;
  }

  get footer(): string {
    return this._footer;
  }

}

@Injectable()
export class CommonPopupService extends AbstractCommonPopupService {
  constructor() {
    super();
  }

}
