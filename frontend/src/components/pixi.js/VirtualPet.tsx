import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Background from "../../assets/sprites/petBg.png";
import happyCat from "../../assets/sprites/breadcat/happy-stand.gif";
import sleepCat from "../../assets/sprites/breadcat/sleeping.gif";
import angyCat from "../../assets/sprites/breadcat/angy-stand.gif";
import sadCat from "../../assets/sprites/breadcat/crying.gif";
import hungyCat from "../../assets/sprites/breadcat/HUNGY.gif";
import hungryStand from "../../assets/sprites/breadcat/hungy-stand.gif";
import standCat from "../../assets/sprites/breadcat/stand.gif";
import walkLeft from "../../assets/sprites/breadcat/walk-left.gif";
import walkRight from "../../assets/sprites/breadcat/walk-right.gif";

export const imgs = [happyCat, sleepCat, angyCat, sadCat, hungyCat, hungryStand, standCat, walkLeft, walkRight];

const VirtualPet = ({ currentImageIndex, petPosition, isFeeding }) => {
  return (
    <Box 
      textAlign="center" 
      backgroundImage={`url(${Background})`} 
      backgroundSize="cover" 
      backgroundPosition="center" 
      width="500px" 
      height="500px" 
      position="relative"
    >
      <Image 
        src={isFeeding ? hungryStand : imgs[currentImageIndex]} 
        alt="Virtual Pet" 
        width="200px" 
        height="200px" 
        position="absolute" 
        top="82%" 
        left={`${petPosition}px`} 
        transform="translate(-50%, -50%)"
        transition="left 1s linear" // Add transition for smooth movement
      />
    </Box>
  );
};

export default VirtualPet;