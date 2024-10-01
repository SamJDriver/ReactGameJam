import { Texture } from "pixi.js"
import { Stage, Container, Sprite, Text, AnimatedSprite } from '@pixi/react';
import { WindowHeight, WindowWidth } from "../World/World";

export const ForestFloor = () => {

    const leftCornerTexture = Texture.from('../public/assets/1 Tiles/Tile_01.png');
    const middleTileTexture = Texture.from('../public/assets/1 Tiles/Tile_02.png');
    const rightCornerTexture = Texture.from('../public/assets/1 Tiles/Tile_03.png');

    return (
        <>
            <Sprite
                texture={leftCornerTexture}
                x = {0}
                y = {WindowHeight - (leftCornerTexture.height*2)}
                scale={2}
            />
            
            {
                Array(34).fill(0).map((_, i) => (
                    <Sprite
                        texture={middleTileTexture}
                        x = {leftCornerTexture.width + i*(middleTileTexture.width)}
                        y = {WindowHeight - (middleTileTexture.height*2)}
                        scale={2}
                    />
                ))
            }
            
            <Sprite
                texture={rightCornerTexture}
                x = {WindowWidth - (rightCornerTexture.width*2)}
                y = {WindowHeight - (rightCornerTexture.height*2)}
                scale={2}
            />


        </>
    )
}