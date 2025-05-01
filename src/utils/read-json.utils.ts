import { TilesJsonObject } from '../model/tiles-json-object.ts';
import tileJson from '/data/tiles.json?url';
import { GameTile } from '../model/game-tile.ts';
import { VideoTile } from '../model/video-tile.ts';

export class ReadJsonUtils {
  static async readTiles(): Promise<Object> {
    const tilesJson = await fetch(tileJson);
    return await tilesJson.json();
  }

  static convertTilesJsonObject(jsonObject: any): TilesJsonObject {
    const tileObject = new TilesJsonObject();
    tileObject.gameTiles = this.convertGameTiles(jsonObject['gameTiles']);
    tileObject.videoTiles = this.convertVideoTiles(jsonObject['videoTiles']);
    return tileObject;
  }

  private static convertGameTiles(jsonObjectList: any[]): GameTile[] {
    const result: GameTile[] = [];
    for (let jsonObject of jsonObjectList) {
      result.push(
        new GameTile(
          jsonObject['title'],
          jsonObject['link'],
          jsonObject['state'],
          jsonObject['version'],
          jsonObject['lastUpdate'],
        ),
      );
    }
    return result;
  }

  private static convertVideoTiles(jsonObjectList: any[]): VideoTile[] {
    const result: VideoTile[] = [];
    for (let jsonObject of jsonObjectList) {
      result.push(
        new VideoTile(
          jsonObject['title'],
          jsonObject['link'],
          jsonObject['publicationDate'],
        ),
      );
    }
    return result;
  }
}
