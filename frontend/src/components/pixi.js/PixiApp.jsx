import { useMemo } from 'react';
import { useState } from "react";

import { BlurFilter } from 'pixi.js';
import { Stage, Sprite } from '@pixi/react';

import { Box } from '@chakra-ui/react'
import Background from "../../assets/sprites/petBg.png"
import happyCat from "../../assets/sprites/breadcat/happy-stand.gif"
import sleepCat from "../../assets/sprites/breadcat/sleeping.gif"
import angyCat from "../../assets/sprites/breadcat/angy-stand.gif"
import sadCat from "../../assets/sprites/breadcat/crying.gif"
import hungyCat from "../../assets/sprites/breadcat/HUNGY.gif"
import hungryStand from "../../assets/sprites/breadcat/hungy-stand.gif"
import standCat from "../../assets/sprites/breadcat/stand.gif"
import './PixiApp.css'

const imgs = [hungyCat, hungryStand, sleepCat, happyCat, angyCat, sadCat,  standCat];

const handleImageClick = (setCurrentImageIndex) => {
  setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgs.length);
};

const PixiApp = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const blurFilter = useMemo(() => new BlurFilter(2), []);
  return (
    <Box class="parent" borderColor="red" borderRadius="5px">
        <img class="bg" src={Background} alt="Background" x={0} y={0} width={500} height={500} />
        <img class="cat" src={imgs[currentImageIndex]} onClick={() => handleImageClick(setCurrentImageIndex)} alt="bread cat" />

        {/* <Stage width={500} height={500}>
        <Sprite image={Background} x={0} y={0} width={500} height={500}/>
        </Stage> */}
    </Box>
  );
};

export default PixiApp;
