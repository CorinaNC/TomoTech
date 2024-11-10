import { VStack, GridItem, Grid, Box, Image } from '@chakra-ui/react'
import Header from "./components/header"
import CalendarApp from "./components/calendar/CalendarApp.jsx"

function App() {
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
          <Header />
            <Image src="https://via.placeholder.com/150" width={500} height={500}/>
            </VStack>
        </GridItem>
      </Grid>
      </>
  );
}

export default App;
