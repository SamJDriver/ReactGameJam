import { useApp } from "@pixi/react";
import Matter from "matter-js";
import React, { useEffect } from "react";
import { useEngine } from "../World/World";

export const Mouse: React.FC<React.PropsWithChildren<{ constraint?: { stiffness: number } }>> = ({ children, constraint = { stiffness: 0.2 } }) => {
    const app = useApp();
    const engine = useEngine();
  
    useEffect(() => {
      const mouse = Matter.Mouse.create(app.view as HTMLCanvasElement);
      const mouseConstraint = Matter.MouseConstraint.create(engine, { mouse, constraint });
      
      const scale = 1 / window.devicePixelRatio;
      Matter.Mouse.setScale(mouse, { x: scale, y: scale });
      Matter.World.add(engine.world, mouseConstraint);
  
      return () => {
        Matter.World.remove(engine.world, mouseConstraint);
      };
    }, []);
  
    return <>{children}</>;
  };