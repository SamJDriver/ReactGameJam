import { useEffect, useRef } from "react";
import { useEngine } from "../World/World";
import { Graphics, useTick } from "@pixi/react";
import Matter from "matter-js";
import { LineStyle } from "pixi.js";


enum BodyType {
    Rectangle,
    Circle
  }

const xy = (vertice: Matter.Vector) => [vertice.x, vertice.y];

export const Shape = ({ type, x, y, width, height, radius, options, lineStyle, fillStyle } : any) => {
    const engine = useEngine();
    const body = useRef<any>();
    const graphics = useRef<any>();
  
        useTick((delta) => {
          const g = graphics.current;
          const b = body.current;
        
        g.clear();
        
        g.lineStyle(...lineStyle);
        g.beginFill(...fillStyle);

        g.moveTo(...xy(b.vertices[0]));
        for (var j = 1; j < b.vertices.length; j += 1) g.lineTo(...xy(b.vertices[j]));
        g.lineTo(...xy(b.vertices[0]));
        
        if (/Circle/.test(b.label)) {
         g.moveTo(b.position.x, b.position.y) ;
         g.lineTo(b.position.x + Math.cos(b.angle) * (radius || 10), b.position.y + Math.sin(b.angle) * (radius || 10));
        }
    });
  
    useEffect(() => {
      if (options) {
        if (type === "rectangle") {
            body.current = Matter.Bodies.rectangle(x, y, (width ?? 10), (height ?? 10), options);
        }
        if (type === "circle") {
            body.current = Matter.Bodies.circle(x, y, (radius ?? 10), options);
        }
      }
      
  
      Matter.World.add(engine.world, body.current);
  
      return () => {
        Matter.World.remove(engine.world, body.current);
      };
    }, []);
  
    return <Graphics ref={graphics} />;
  };


Shape.defaultProps = {
    lineStyle: [1, 0xff0000, 1],
    fillStyle: [0xff0000, 0]
}