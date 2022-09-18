/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import useWindowSize from '../utils/useWindowSize'

const reflection1 = () => {
  const size = useWindowSize()
  return (
    <Box
      height={size.width < 1467 ? "auto" : "100vh"}
      border='1px solid black'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingY: '30px',
      }}
    >

        <Text fontSize='2xl' padding='10px 20px'>Reflection 1: Principles of Sustainability to Create Viable Systems </Text>
        <Text marginTop='15px' width='80%' fontSize='xl'>
        In the last four weeks of my internship, my team’s task was to implement the X-ray image renderer for the React web application. However, x-ray images do not use normal photo format such as PNG or JPEG but DICOM format instead. None of us had dealt with this format before. The team was to find a method to integrate a feature that let the React application handle the x-ray images.
        </Text>
        <Text marginTop='15px' width='80%' fontSize='xl'>
        The first thing came to our minds, as software engineers, was if we cannot develop this feature from scratch, we should look for packages or libraries, which have the feature the project needs, built by other engineers. Time saving is one of the benefits of using third party libraries in software development <b>(Scalable Path 2022)</b>. Therefore, we started googling and found a package what the project exactly needed. The problem was we were not certain whether we could implement it in our application.        </Text>
        <Text marginTop='15px' width='80%' fontSize='xl'>
        In software development, this type of scenarios happens very often. Instead of spending time to build something from ground up, using existing libraries is much faster. However, it is important to use the package that works well with the project as there are more than one open-source projects that handle similar, if not the same, tasks.
        </Text>
        <Text marginTop='15px' width='80%' fontSize='xl'>
        After a week of exploring, the team decided to choose OHIF’s DICOM viewer package which was the most popular at that time. Although it was an open-source project which let us use it in our project, the documentation was about how to use/implement it was unclear. Because the community that developed OHIF’s DICOM viewer was migrating from a pure JavaScript library to React library. The first option did have a good documentation. The second one, even though it did not have proper documentation, it is better for our project in long run, as it is also a React application. So, the team needed to make a choice.  
        </Text>
        <Text marginTop='15px' width='80%' fontSize='xl'>
        The team chose the second option even though we knew it will not be easy. One of my colleagues and I had to research extensively and tested the library for a couple of days before we were able to start integrating the DICOM library to our project. The reason we chose the second option was because it is beneficial for the client. In the future, the documentation for the DICOM view react library will definitely have a proper documentation. Therefore, even if the client hires new software engineer, they can still start working on it easily.
        </Text>
        <Text marginTop='15px' width='80%' fontSize='xl'>
        From this internship, I had learned how important it was to choose the right framework or library. If the client does not have technical knowledge, we also need to be a consultant and explain the pros and cons. In addition to that, I also had to consider which options the team was willing to choose because choosing the DICOM library was not the only time the team needed to have discussion. We had meetings to decide a programming language, frontend framework and UI libraries that majority of the team, if not everyone, is happy with.  
        </Text>
        <Text fontWeight='bold' marginTop='15px' width='80%' fontSize='xl'>
        Reference
        </Text>
        <Text marginTop='15px' width='80%' fontSize='xl'>
        Scalable Path 2022, <i>Should Developers Use Third-Party Libraries?</i>, viewed 7 Sept 2022, &lt;https://www.scalablepath.com/back-end/third-party-libraries&gt;
        </Text>
 
    </Box> 
  )
}

export default reflection1