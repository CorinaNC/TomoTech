import { useState } from "react";
import { Container, Button, Link, Image, HStack } from "@chakra-ui/react";
import FoodIcon from "../assets/jam.png";
import SoundIcon from "../assets/sound.png";
import MuteIcon from "../assets/mute.png";
import MoneyIcon from "../assets/coin.png";
import ShopIcon from "../assets/sohp.png";
import { ButtonLog } from "./buttons/button-log.jsx"

const Header = () => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleSound = () => {
    setIsMuted((prevIsMuted) => !prevIsMuted);
  };

  return (
    <Container paddingX={6}>
      <HStack spacing={6} mb={6} justifyContent="center">     
        <ButtonLog></ButtonLog>
        <Button
          variant="circular"
          onClick={toggleSound}
          width="75px"
          height="75px"
          minWidth="75px"
          minHeight="75px"
          borderRadius="50%"
          flexShrink={0}
        >
          <Image src={isMuted ? MuteIcon : SoundIcon} />
        </Button>
        <Button
          variant="circular"
          width="75px"
          height="75px"
          minWidth="75px"
          minHeight="75px"
          borderRadius="50%"
          flexShrink={0}
        >
          <Image src={FoodIcon} />
        </Button>
        <Button
          variant="circular"
          width="75px"
          height="75px"
          minWidth="75px"
          minHeight="75px"
          borderRadius="50%"
          flexShrink={0}
        >
          <Image src={ShopIcon} />
        </Button>
        <Button
          bg="#FFE8CB"
          height="75px"
          borderRadius={100}
          border="5px solid #CE9964"
          textColor="#CE9964"
          _hover={{ color: "white", bg: "#CE9964" }}
          flexShrink={0}
        >
          <Image src={MoneyIcon} width="50%" height="80%" mr={3} />
          <Link _hover={{ textDecoration: "none" }}>2000 Money</Link>
        </Button>
      </HStack>
    </Container>
  );
};

export default Header;
