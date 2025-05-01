import { GameTile } from './game-tile.ts';
import { VideoTile } from './video-tile.ts';

export class TilesJsonObject {
  // *****************************************************************************************************************
  // ATTRIBUTES
  // *****************************************************************************************************************

  private _gameTiles: GameTile[];
  private _videoTiles: VideoTile[];

  // *****************************************************************************************************************
  // CONSTRUCTOR
  // *****************************************************************************************************************

  constructor() {
    this._gameTiles = [];
    this._videoTiles = [];
  }

  // *****************************************************************************************************************
  // GETTER / SETTER
  // *****************************************************************************************************************

  get gameTiles(): GameTile[] {
    return this._gameTiles;
  }

  set gameTiles(value: GameTile[]) {
    this._gameTiles = value;
  }

  get videoTiles(): VideoTile[] {
    return this._videoTiles;
  }

  set videoTiles(value: VideoTile[]) {
    this._videoTiles = value;
  }

  // *****************************************************************************************************************
  // PUBLIC METHODS
  // *****************************************************************************************************************

  public addGameTile(gameTile: GameTile) {
    this._gameTiles.push(gameTile);
  }

  public addVideoTile(videoTile: VideoTile) {
    this._videoTiles.push(videoTile);
  }
}
