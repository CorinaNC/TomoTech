import { Heading } from "@chakra-ui/react"
import { useAuth0 } from "@auth0/auth0-react";


const Footer = () => {
  return (
    <Heading textAlign="center" fontSize={30} textColor="white">
        Made for MadHacks 2024
    </Heading>
  )
}

export default Footer