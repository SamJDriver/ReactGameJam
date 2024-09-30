import { Texture } from "pixi.js"
import { Stage, Container, Sprite, Text, AnimatedSprite } from '@pixi/react';
import { WindowHeight, WindowWidth } from "../World/World";

export const ForestFloor = () => {

    const leftCornerTexture = Texture.from('../public/assets/1 Tiles/Tile_01.png');
    const tile02Texture = Texture.from('../public/assets/1 Tiles/Tile_02.png');
    const rightCornerTexture = Texture.from('../public/assets/1 Tiles/Tile_03.png');

    return (
        <>
            <Sprite
                texture={leftCornerTexture}
                x = {leftCornerTexture.width}
                y = {WindowHeight - leftCornerTexture.height}
                scale={2}
            />
            
            <Sprite
                texture={tile02Texture}
                x = {leftCornerTexture.width * 2}
                y = {WindowHeight - leftCornerTexture.height}
                scale={2}
            />
            
            <Sprite
                texture={rightCornerTexture}
                x = {WindowWidth - rightCornerTexture.width}
                y = {WindowHeight - rightCornerTexture.height}
                scale={2}
            />


        </>
    )
}