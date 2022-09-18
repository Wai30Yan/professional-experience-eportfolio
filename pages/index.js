/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Stack, Text } from "@chakra-ui/react";
import useWindowSize from "../utils/useWindowSize";

export default function home() {
  const { width } = useWindowSize()
  return (
   <Box
      height={width < 400 ? "auto" : "100vh"}
      border='1px solid black'
      sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingY: '30px'
      }}
    >
        <Stack maxW={920} spacing={3} padding='10px 20px'>
          <Text fontSize={width < 400 ? 'xl' : '2xl'}>About Me</Text>
          <Text fontSize={width < 400 ? 'md' :'xl'}>
            My name is Wai Yan Myint Thu. I’m studying Bachelor of Software Engineering (honours) at the University of Technology, Sydney. I’m in my final year of the course. I’m fascinated by how the digital world works and always interested in learning new and existing technologies to sharpen my skills.  
          </Text>
          <Text fontSize={width < 400 ? 'md' :'xl'}>
            Throughout my years at the University, I’ve done a couple of software engineering studios. In these studios, I mostly work as a front-end engineer for web and mobile applications. That being said, I still keep in touch with backend development to widen my option for job applications. More importantly, I learned how to work efficiently as a team in agile development. 
          </Text>
          <Text fontSize={width < 400 ? 'md' :'xl'}>
            As a software engineer, my passion lies in writing code. It is our nature to jump right into coding every time there is a project. However, I retrain myself from doing that as I know planning is just as important as developing stage. I usually spend time on Hackerrank to practice algorithms in different programming languages.     
          </Text>
        </Stack>   
    </Box> 
  )
}
