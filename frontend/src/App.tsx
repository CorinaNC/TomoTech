import { useState, useEffect } from "react";
import { VStack, GridItem, Grid, Box } from "@chakra-ui/react";
import Header from "./components/header";
import CalendarApp from "./components/calendar/CalendarApp.jsx";
import VirtualPet, { imgs } from "./components/pixi.js/VirtualPet";

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [petPosition, setPetPosition] = useState(250); // Start at the center
  const [isWalking, setIsWalking] = useState(false);
  const [isFeeding, setIsFeeding] = useState(false);

  const handleFeed = () => {
    setIsFeeding(true);
    setCurrentImageIndex(5); // Use hungryStand animation
    setTimeout(() => {
      setIsFeeding(false);
    }, 3000); // Pet will be in feeding state for 3 seconds
  };

  const handleEventDeleted = () => {
    setCurrentImageIndex(0);
    setTimeout(() => {
      setCurrentImageIndex(0);
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const direction = Math.random() < 0.5 ? -1 : 1; // Randomly choose left or right
      const distance = Math.random() * 50; // Randomly choose a distance between 0 and 50px
      const newPosition = Math.max(100, Math.min(500 - 100, petPosition + direction * distance)); // Ensure the position stays within bounds (500px - pet width)

      setPetPosition(newPosition);
      setIsWalking(true);
      setCurrentImageIndex(direction === -1 ? 7 : 8); // Use walkLeft or walkRight animation

      setTimeout(() => {
        setIsWalking(false);
        setCurrentImageIndex(6); // Use stand animation
      }, 1000); // Walk for 1 second
    }, Math.random() * 10000 + 3000); // Move every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [petPosition]);

  return (
    <>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={3}
        padding={30}
        margin={0}
      >
        <GridItem>
          <Box>
            <CalendarApp onEventDeleted={handleEventDeleted} />
          </Box>
        </GridItem>
        <GridItem>
          <VStack>
            <Header onFeed={handleFeed} />
            <VirtualPet currentImageIndex={currentImageIndex} petPosition={petPosition} isFeeding={isFeeding} />
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;