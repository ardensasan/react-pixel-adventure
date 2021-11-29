import Entity from "../classes/Entity";

export const checkTileIntersection = (entity: Entity, map: Array<any>) => {
  let tempXPosition = entity.getXPosition();
  let tempYPosition = entity.getYPosition();
  entity.moveEntity();
  const hasIntersection =  map.find((tile) => {
    if (
      tile.x < entity.getXPosition() + entity.getWidth() &&
      tile.x + tile.w > entity.getXPosition() &&
      tile.y < entity.getYPosition() + entity.getHeight() &&
      tile.h + tile.y > entity.getYPosition() &&
      tile.value === 1
    ) {
      return true;
    } else {
      return false;
    }
  });

  if(hasIntersection){
    entity.setPosition(tempXPosition,tempYPosition)
  }
};
