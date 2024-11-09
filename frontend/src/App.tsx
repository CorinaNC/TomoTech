import { Container, Grid, Box, Image } from '@chakra-ui/react'
import Header from "./components/header"

function App() {
  return (
    <Box>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={3} padding={0}>
        <Container margin={100} alignItems="center">
          <Box bg="#CE9964">
            <Box bg="red" textColor="white">
              Lorem ipsum
              Lorem ipsum
              Lorem ipsum
              Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
            </Box>
          </Box>
        </Container>
        <Container margin={100} alignItems="center">
          <Header />
          <Box bg="#CE9964">
            <Image src="https://via.placeholder.com/150" width={600} height={600}/>
          </Box>
        </Container>
      </Grid>
    </Box>
  )
}

export default App