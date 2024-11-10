import { Container, Button, Link, Image, HStack } from '@chakra-ui/react'
import FoodIcon from "../assets/jam.png"
import SoundIcon from "../assets/sound.png"
import MoneyIcon from "../assets/coin.png"
import ShopIcon from  "../assets/sohp.png"
const Header = () => {
  return (
    <Container>
        <HStack spacing={1} mb={6} justifyContent="center">
            <Button variant="circular">
                <Image src={SoundIcon} width="100%" height="75%" />
            </Button>
            <Button variant="circular">
                <Image src={FoodIcon} width="75%" height="75%"/>
            </Button>
            <Button variant="circular">
                <Image src={ShopIcon} width="100%" height="75%" />
            </Button>
            <Button bg="#FFE8CB" borderRadius={100} border="5px solid #CE9964" textColor="#CE9964" _hover={{ color: "white", bg: "#CE9964" }}>
                <Image src={MoneyIcon} width="50%" height="80%" mr={3}/>
                <Link _hover={{ textDecoration: "none" }}>
                    2000 Money
                </Link>
            </Button>
        </HStack>
    </Container>
  )
}

export default Header