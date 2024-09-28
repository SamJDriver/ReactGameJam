import './App.css';
import { useMemo } from 'react';

import { BlurFilter, TextStyle, Texture } from 'pixi.js';
import { Stage, Container, Sprite, Text, AnimatedSprite } from '@pixi/react';
import { World } from './components/World/World';
import { Mouse } from './components/Mouse/Mouse';
import { Shape } from './components/Shape/Shape';

const App = () => {
  const blurFilter = useMemo(() => new BlurFilter(2), []);
  const bunnyUrl = 'https://pixijs.io/pixi-react/img/bunny.png';
  const coinUrl = 'https://pixijs.io/pixi-react/img/coin.png';
  const height = 800;
  const width = 600;

  const bunnyTexture = Texture.from(bunnyUrl);
  const coinTexture = Texture.from(coinUrl);
  
  const textures = [bunnyTexture, coinTexture];  
  return (
    <Stage width={width} height={height} options={{ background: 0x1099bb }}>
      <World>
        <Mouse>
          <>
            <Container x={200} y={200} name="bounds">
            <Shape
                name="bottom"
                type="rectangle"
                x = {width / 2}
                y = {height + 50}
                width = {width}
                height = {100}
                options={{ isStatic: true }}
                />
              <Shape
                name="top"
                type="rectangle"
                x = {width / 2}
                y = {-50}
                width = {width}
                height = {100}
                options={{ isStatic: true }}
                />
              <Shape
                name="left"
                type="rectangle"
                x = {-50}
                y = {height / 2}
                width = {100}
                height = {height}
                options={{ isStatic: true }}
                />
              <Shape
                name="right"
                type="rectangle"
                x = {width + 50}
                y = {height / 2}
                width = {100}
                height = {height}
                options={{ isStatic: true }}
                />
            </Container>

            <Shape
              type="circle"
              fillStyle={[0x383838, 0.5]}
              x={400}
              y={200}
              radius={20 + Math.random() * 100}
              options={{
                friction: 0.8,
                  density: 0.00001,
                    restitution: 0.4,
                      stiffness: 1
              }}
              />

          </>
        </Mouse>
      </World>
    </Stage>
    // <Stage width={800} height={600} options={{ background: 0x1099bb }}>
    //   <Sprite image={bunnyUrl} x={300} y={150} />
    //   <Sprite image={bunnyUrl} x={500} y={150} />
    //   <Sprite image={bunnyUrl} x={400} y={200} />

    //   <AnimatedSprite x={400} y={200}
    //     anchor={0.5}
    //     textures={textures}
    //     isPlaying={true}
    //     initialFrame={0}
    //     animationSpeed={0.05}
    //   />

    //   <Container x={200} y={200}>
    //     <Text
    //       text="Hello World"
    //       anchor={0.5}
    //       x={220}
    //       y={150}
    //       filters={[blurFilter]}
    //       style={
    //         new TextStyle({
    //           align: 'center',
    //           fill: '0xffffff',
    //           fontSize: 50,
    //           letterSpacing: 20,
    //           dropShadow: true,
    //           dropShadowColor: '#E72264',
    //           dropShadowDistance: 6,
    //         })
    //       }
    //     />
    //   </Container>
    // </Stage>
  );
};

export default App;