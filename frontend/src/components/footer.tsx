import { Heading, Link } from "@chakra-ui/react"
const Footer = () => {
  return (
    <>
    <Heading textAlign="center" fontSize={30} textColor="white">
        Created for MadHacks 2024
        </Heading>
      <Heading textAlign="center" fontSize={30} textColor="white">
      <Link href="https://github.com/CorinaNC/TomoTech/" _hover={{ textDecoration: "underline" }} isExternal>
      GitHub
      </Link>
    </Heading>
    
    </>
  )
}

export default Footer