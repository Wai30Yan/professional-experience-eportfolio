import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Contain from '../components/Contain'

const reflection2 = () => {
  return (
    <Box
    height='100vh'
    border='1px solid black'
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingY: '30px',
      overflowY: 'scroll'
    }}
  >
      <Text fontSize='2xl'>Reflection 2: Professional Practice within Intercultural and Global Contexts</Text>
      <Text marginTop='15px' width='80%' fontSize='xl'>
      During my internship I got to know people from different counties and was expected to work together as a team. There were six of us in my team and each of them have different technical background even though we are to work as a software engineering group. I was assigned to work on developing the user interface of the product with another teammate who had recently graduated. However, my colleague is not a native English speaker, so the language barrier was to be expected.
      </Text>
      <Text marginTop='15px' width='80%' fontSize='xl'>
      My co-worker did not have much experience with the framework we were using. I recommended to watch some tutorials on YouTube. Due to language barrier, my co-worker’s learning rate was slow. However, I was able to help him to speed up the learning process as we were expected to come to the office every week. I was happy to teach him patiently even when he had hard times understanding the techniques I was explaining.
      </Text>
      <Text marginTop='15px' width='80%' fontSize='xl'>
      Initially, I did not force him to learn the framework very quickly. I let him learn in his own pace as I belief everyone has their own ways of learning. However, as someone who recently finished the course, I expected more from him. It was hard for me to accept the fact that after four weeks, my co-worker was still not understanding the most basic and common techniques of the framework which made me to do most of the project. 
      </Text>
      <Text marginTop='15px' width='80%' fontSize='xl'>
      Then, lockdown happened due to the outbreak, and we were forced to work from home. This really set back the rate of development process. It was harder to teach my co-worker how to fix the error he had over a video call. His lack of ability to understand what I was saying and the framework we were using really made me frustrated. 
      </Text>
      <Text marginTop='15px' width='80%' fontSize='xl'>
      When I realised, he was not going to be much helpful with the project, I asked another team member to assist with the project. The new co-worker is fourth year software engineering student, same as me. We were in the same class before. Luckily, the new co-worker managed to get familiar with the framework in a short period of time. He was able to contribute to the project better than expected. 
      </Text>
      <Text marginTop='15px' width='80%' fontSize='xl'>
      What I learned from this experience is everyone is fighting their own battles. I was really annoyed to be working with my previous co-worker as I had to teach him everything like teaching how to walk to a baby. But after witnessing how another co-worker learned the framework so quickly, I realised there will be people who are better than you or not as good as you at certain tasks. I am confidence if my new co-worker and I had to learn the same framework at the same thing, he will definitely outrun me. The best thing we can do when someone has difficulties learning something in a workplace is to be patient and show some compassion and professionalism. 
      </Text>

  </Box> 
  )
}

export default reflection2