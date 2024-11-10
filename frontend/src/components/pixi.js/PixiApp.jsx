import { useMemo } from 'react';

import { Application, BlurFilter } from 'pixi.js';
import { Stage, Sprite } from '@pixi/react';

import { Box } from '@chakra-ui/react'
import Background from "../../assets/sprites/petBg.png"

const PixiApp = () => {
  const blurFilter = useMemo(() => new BlurFilter(2), []);
  return (
    <Box borderColor="red" borderRadius="5px">
        <Stage width={500} height={500}>
        <Sprite image={Background} x={0} y={0} width={500} height={500}/>
        </Stage>
    </Box>
  );
};

export default PixiApp;
