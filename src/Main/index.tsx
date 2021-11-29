import { Rect as RectType } from "konva/lib/shapes/Rect";
import { useEffect, useRef, useState } from "react";
import { Layer, Rect, Stage } from "react-konva";
import EntityAnimation from "../classes/Animation";
import Player from "../classes/Player";
import map from '../utils/map'
const Main = () => {
  const playerRect = useRef<RectType>(null);
  const player = new Player(0, 0, 32, 32);
  const [mapLevel,setMapLevel] = useState<number>(0)
  useEffect(() => {
    let animation;
    if (playerRect.current) {
      animation = new EntityAnimation(playerRect.current, player,map);
      animation.startAnimation();
      player.addListener();
    }
  });

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect
          width={window.innerWidth}
          height={window.innerHeight}
          fill="black"
        />
        {map.map((tile)=>{
          return <Rect x={tile.x} y={tile.y} width={tile.w} height={tile.h} fill={!tile.value ? "yellow": "red"}/>
        })}
        <Rect
          height={player.getWidth()}
          width={player.getHeight()}
          fill="white"
          ref={playerRect}
        />
      </Layer>
    </Stage>
  );
};

export default Main;
