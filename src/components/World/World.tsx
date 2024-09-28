import { useTick } from "@pixi/react";
import { useContext, useState } from "react";
import * as Matter from 'matter-js';
import React from "react";

export const EngineContext = React.createContext<Matter.Engine | null>(null);
export const useEngine = () => useContext(EngineContext)!;


export const World = ({ children } : React.PropsWithChildren<{}>) => {
    const [engine] = useState(() => Matter.Engine.create());
    useTick((delta) => Matter.Engine.update(engine, delta * (2)));
  
    return <EngineContext.Provider value={engine}>
        {children}
        
        </EngineContext.Provider>;
  };
  