import Entity from "../classes/Entity";
import Player from "../classes/Player";

export const checkTileIntersection = (entity: Entity, map: Array<any>) => {
   return map.find((tile) => {
    if (
      tile.x < entity.getXPosition() + entity.getWidth() -0.1 &&
      tile.x + tile.w-0.1 > entity.getXPosition() &&
      tile.y < entity.getYPosition() + entity.getHeight()-0.1 &&
      tile.h + tile.y-0.1 > entity.getYPosition() &&
      tile.value === 1
    ) {
      return true;
    } else {
      return false;
    }
  });
};
