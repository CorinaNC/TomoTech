import { Box } from "@chakra-ui/react"

import Footer from './footer';

const BreadWrapper = ({ children }) => { return (
    <Box>
      <Box 
        bg="#FFE8CB" 
        borderRadius={50} 
        border="5px solid #CE9964"
        p={4}
      >
        {children}
      </Box>
      <Box>
          <Footer />
      </Box>
    </Box>
)}

export default BreadWrapper