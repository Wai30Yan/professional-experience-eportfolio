import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Contain from '../components/Contain'
import { AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai'

const contact = () => {
  return (
    <Contain>
      <Box
        sx={{
          height: '70%',
          width: 'auto',
          padding: '0px 40px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box width='100%' marginTop='10px' display='flex' justifyContent='center' alignItems='center'>
          <AiOutlineMail fontSize={32} />
          <Text marginLeft='10px'>mr.waiyanmyint@gmail.com</Text>
        </Box>
        <Box width='100%' marginTop='10px' display='flex' alignItems='center'>
          <AiOutlinePhone fontSize={32} />
          <Text marginLeft='10px'>+61-449-744-269</Text>
        </Box>
        <Box as='a' href='https://www.linkedin.com/in/wai-yan-951b50221/' width='100%' marginTop='10px' display='flex' alignItems='center'>
          <AiOutlineLinkedin fontSize={32} />
          <Text marginLeft='10px'>Linkedin Page</Text>
        </Box>
        <Box as='a' href='https://github.com/Wai30Yan' width='100%' marginTop='10px' display='flex' alignItems='center'>
          <AiFillGithub fontSize={32} />
          <Text marginLeft='10px'>Github Page</Text>
        </Box>
      </Box>
    </Contain>
  )
}

export default contact