import { ATile } from './a-tile';

export class VideoTile extends ATile {
  // *****************************************************************************************************************
  // ATTRIBUTES
  // *****************************************************************************************************************

  private _publicationDate: string;

  // *****************************************************************************************************************
  // CONSTRUCTOR
  // *****************************************************************************************************************

  constructor(
    title: string,
    link: string,
    img: string,
    publicationDate: string,
  ) {
    super(title, link, img);
    this._publicationDate = publicationDate;
  }

  // *****************************************************************************************************************
  // GETTER / SETTER
  // *****************************************************************************************************************

  get publicationDate(): string {
    return this._publicationDate;
  }

  set publicationDate(value: string) {
    this._publicationDate = value;
  }
}
