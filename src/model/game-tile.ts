import { ATile } from './a-tile';

export class GameTile extends ATile {
  // *****************************************************************************************************************
  // ATTRIBUTES
  // *****************************************************************************************************************

  private _state: string;
  private _version: string;
  private _lastUpdate: string;

  // *****************************************************************************************************************
  // CONSTRUCTOR
  // *****************************************************************************************************************

  constructor(
    title: string,
    link: string,
    img: string,
    state: string,
    version: string,
    lastUpdate: string,
  ) {
    super(title, link, img);
    this._state = state;
    this._version = version;
    this._lastUpdate = lastUpdate;
  }

  // *****************************************************************************************************************
  // GETTER / SETTER
  // *****************************************************************************************************************

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }

  get version(): string {
    return this._version;
  }

  set version(value: string) {
    this._version = value;
  }

  get lastUpdate(): string {
    return this._lastUpdate;
  }

  set lastUpdate(value: string) {
    this._lastUpdate = value;
  }
}
