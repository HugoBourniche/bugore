export abstract class ATile {
  // *****************************************************************************************************************
  // ATTRIBUTES
  // *****************************************************************************************************************

  private _title: string;
  private _link: string;
  private _img: string;

  // *****************************************************************************************************************
  // CONSTRUCTOR
  // *****************************************************************************************************************

  constructor(title: string, link: string, img: string) {
    this._title = title;
    this._link = link;
    this._img = img;
  }

  // *****************************************************************************************************************
  // GETTER / SETTER
  // *****************************************************************************************************************

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get link(): string {
    return this._link;
  }

  set link(value: string) {
    this._link = value;
  }

  get img(): string {
    return this._img;
  }

  set img(value: string) {
    this._img = value;
  }
}
