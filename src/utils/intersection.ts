import Entity from "../classes/Entity";
import Player from "../classes/Player";

export const checkTileIntersection = (entity: Entity, map: Array<any>) => {
   return map.find((tile) => {
    if (
      tile.x+0.1 < entity.getXPosition() + entity.getWidth() &&
      tile.x + tile.w-0.1 > entity.getXPosition() &&
      tile.y+0.1 < entity.getYPosition() + entity.getHeight() &&
      tile.h + tile.y-0.1 > entity.getYPosition() &&
      tile.value === 1
    ) {
      return tile;
    } else {
      return false;
    }
  });
};
