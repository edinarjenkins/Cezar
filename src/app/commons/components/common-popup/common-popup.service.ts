import {Injectable, EventEmitter} from '@angular/core';


@Injectable()
abstract class AbstractCommonPopupService {
  public pushData = new EventEmitter<any>();
  public removeData = new EventEmitter<any>();
  private _disabledSubmit: boolean;
  private _title = '';
  private _content = '';
  private _footer = '';

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

  get disabledSubmit(): boolean {
    return this._disabledSubmit;
  }

  set disabledSubmit(value: boolean) {
    this._disabledSubmit = value;
  }

}

@Injectable()
export class CommonPopupService extends AbstractCommonPopupService {
  constructor() {
    super();
  }

  setTitle(title) {
    this.title = title;
    this.pushData.emit('change service');
    return this;
  }
  setContent(content) {
    this.content = content;
    this.pushData.emit('change service');
    return this;
  }

  setFooter(footer) {
    this.footer = footer;
    this.pushData.emit('change service');
    return this;
  }

  setDisabledSubmit(disabledSubmit) {
    this.disabledSubmit = disabledSubmit;
    this.pushData.emit('change service');
    return this;
  }

  destroyData() {
    this.title = '';
    this.content = '';
    this.footer = '';

    this.removeData.emit('remove data');
  }
}
