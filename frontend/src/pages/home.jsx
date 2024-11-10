import { VStack, GridItem, Grid, Box } from '@chakra-ui/react'
import Header from "../components/header.tsx"
import CalendarApp from "../components/calendar/CalendarApp.jsx"
import PixiApp from "../components/pixi.js/PixiApp.jsx"
import { Profile } from '../components/Profile/profile.jsx'

function Home() {
  return (
    <>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={3} padding={30} margin={0}>
        <GridItem>
          <Box>
            <CalendarApp />
          </Box>
        </GridItem>
        <GridItem>
          <VStack>
            <Profile />
          <Header />
            <PixiApp />
            </VStack>
        </GridItem>
      </Grid>
      </>
  );
}

export default Home;