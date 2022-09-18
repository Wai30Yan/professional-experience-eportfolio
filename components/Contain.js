import { Box, Center, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Contain = ({ children }) => {
  return (
    <Box
     bg={useColorModeValue('white', 'gray.800')}
     sx={{
      height: '820px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
     }}
    >
      {children}
    </Box>
  )
}

export default Contain