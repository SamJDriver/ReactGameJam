import { Texture } from "pixi.js"
import { Stage, Container, Sprite, Text, AnimatedSprite } from '@pixi/react';
import { WindowHeight, WindowWidth } from "../World/World";

export const Archer = () => {

    const archerIdle1Texture = Texture.from('../public/assets/Archer/Idle/Archer_idle_1.png');
    const archerIdle2Texture = Texture.from('../public/assets/Archer/Idle/Archer_idle_2.png');
    const archerIdle3Texture = Texture.from('../public/assets/Archer/Idle/Archer_idle_3.png');
    const archerIdle4Texture = Texture.from('../public/assets/Archer/Idle/Archer_idle_4.png');
    const archerIdle5Texture = Texture.from('../public/assets/Archer/Idle/Archer_idle_5.png');

    return (
        <>
            <AnimatedSprite
                loop={true}
                isPlaying={true}
                animationSpeed={0.1}
                textures={[archerIdle1Texture, archerIdle2Texture, archerIdle3Texture, archerIdle4Texture, archerIdle5Texture]}
                x = {0}
                y = {0}
                initialFrame={0}
            />
        </>
    )

}