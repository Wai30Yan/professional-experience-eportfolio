import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

const coverletter = () => {
  return (
    <Box
      height="100vh"
      border="1px solid black"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingY: "30px",
      }}
    >
      <Box fontWeight='bold' width='80%' marginTop='30px' textAlign='left'>
        Dear Sir or Madam,
      </Box>
      <Box marginBottom='30px' width='80%' marginTop='30px' textAlign='left'>
        First of all, thank you for reading my application. I am Wai Yan Myint Thu, an introverted programmer, who is always eager to learn new technologies. Initially, I started my career as a frontend developer while taking cyber security as sub major. Now, I am willing to widen my career options such as system administrating or cloud computing. I am always motivated to keep on learning and contribute as much as I can to the digital world.  
      </Box>
      <Accordion
        width='80%'
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                A commitment to ethical conduct and the highest standards of professional accountability
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          The first task I was assigned to, during my work experience, was to provide information about technologies available for the client’s project. 
          However, the client did not have any knowledge about the software development nor frameworks. In addition to that, my team was asked to work with biomedical 
          engineering students. The project was simple, a frontend development process for managing x-ray images. 
          As someone who have certain knowledge about developing user interface for web application, I provided pros and cons of popular frontend frameworks such as React,
           Vue or Next to the client and the biomedical team in the simplest way possible so that a non-technical person can understand. Moreover, 
          I also explained different types of UI libraries that can be used for styling the web interface. 
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
              The ability to engage with a creative, innovative and proactive environment
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          After explaining pros and cons of different frontend frameworks and UI libraries for styling, the client insisted that we chose that tech-stack. Biomedical students also left this task to us, the software team. Therefore, we had an internal discussion regarding how to approach the situation. As the only one who had a certain level of frontend development knowledge in the team, I suggested to use React framework as it is easy to learn for both the software and biomedical teams. I also recommended using Material UI for styling as it comes with UI components such as Form, Button, Navigation Bar that the teams can use out of the box which helped with increasing the development speed.   
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                Demonstrated ability to effectively communicate both with other engineers and with stakeholders from different fields.
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          The very next thing I did, after software team had finished choosing the software development tools, was to give crash course on how to use those tools to the biomedical team. First, we taught them how to install and use VScode, Git, GitHub, and command line tool. I spent most of my time at the office around the biomedical team so that I can actively communicate with them and help them out whenever they are stuck. Moreover, even though, the project owner is not the direct client of the software team but of the biomedical team, I joined their weekly meetings to explain what we were doing and the weekly progress. During those meetings, I actively listen and ask the client’s opinions and if there were any changes, they wanted us to make with the user interface.  
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
              Demonstrated ability to use and manage information
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          The hardest part of the work experience arrived when it was time to implement the feature for displaying x-ray images on the web application the team had developed. It would not work if we built the application to display a normal PNG or JPEG image as the x-ray images used a unique format call DICOM. Fortunately, I discovered a package for displaying or managing DICOM x-ray images that we can use with React, the chosen framework. However, the package was originally written as a JavaScript library and its developer were just starting to migrate to React system. Therefore, there were not much information or documentation available about the package. After thorough research which took 4-5 days with cross referencing from an overwhelming number of websites, I had managed to render that UI of that package on our React app. After that one of my teammates was able to manipulate the package into the client requirement.   
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
              The ability to manage your own performance in a professional environment. 
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          Eight weeks after the beginning of the internship, a covid outbreak happened and we were forced to work from home. The outbreak really took a hit to our performance as a team because we were not able to communicate face-to-face. However, I always kept contact with the biomedical team to keep track of their progress and provide help if they need someone from software team for assistance. In addition to that, I also report the team leader regarding what I was doing such as fixing the code structure written by biomedical team to remove errors and warnings. 
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
              A demonstrated ability to work as part of a team and to show leadership when required.
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          I did not take the leader role of the software team during the internship. However, I guided them to the right direction when it comes to choosing the framework. Initially, I wanted to choose the framework, “Next”, as it is a better version of “React”. But the team needed to learn basic of “React” to use “Next”. Naturally, the team was not willing to go with “Next”. And I understood their feelings and accepted to use “React”. After that, I initiated the project and implemented routing system for page navigation so that the teams did not have to spend time learning routing system. With that, the team members only needed to focus on individual page that they were assigned to developed. And while they were doing that, I also helped them with positioning the user interface components such as table of patients’ information, sign in and registration forms.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Box width='80%' marginTop='30px' textAlign='left'>
        Thank you for your time. You can reach out to me anytime with the contact information provided in my resume. I look forward to hearing from you.
      </Box>
      <Box fontWeight='bold' width='80%' marginTop='30px' textAlign='left'>
        Wai Yan Myint Thu
      </Box>
      {/* <Stack maxW={920} spacing={3}>
        <Text fontSize="2xl">
          A commitment to ethical conduct and the highest standards of professional accountability
        </Text>
        <Text fontSize="xl">
          The first task I was assigned to, during my work experience, was to provide information about technologies available for the client’s project. However, the client did not have any knowledge about the software development nor frameworks. In addition to that, my team was asked to work with biomedical engineering students. The project was simple, a frontend development process for managing x-ray images. As someone who have certain knowledge about developing user interface for web application, I provided pros and cons of popular frontend frameworks such as React, Vue or Next to the client and the biomedical team in the simplest way possible so that a non-technical person can understand. Moreover, I also explained different types of UI libraries that can be used for styling the web interface. 
        </Text>
        <Text fontSize="2xl">
          The ability to engage with a creative, innovative and proactive environment
        </Text>
        <Text fontSize="xl">
          After explaining pros and cons of different frontend frameworks and UI libraries for styling, the client insisted that we chose that tech-stack. Biomedical students also left this task to us, the software team. Therefore, we had an internal discussion regarding how to approach the situation. As the only one who had a certain level of frontend development knowledge in the team, I suggested to use React framework as it is easy to learn for both the software and biomedical teams. I also recommended using Material UI for styling as it comes with UI components such as Form, Button, Navigation Bar that the teams can use out of the box which helped with increasing the development speed.   
        </Text>
        <Text fontSize="2xl">
          Demonstrated ability to effectively communicate both with other engineers and with stakeholders from different fields.
        </Text>
        <Text fontSize='xl'>
          The very next thing I did, after software team had finished choosing the software development tools, was to give crash course on how to use those tools to the biomedical team. First, we taught them how to install and use VScode, Git, GitHub, and command line tool. I spent most of my time at the office around the biomedical team so that I can actively communicate with them and help them out whenever they are stuck. Moreover, even though, the project owner is not the direct client of the software team but of the biomedical team, I joined their weekly meetings to explain what we were doing and the weekly progress. During those meetings, I actively listen and ask the client’s opinions and if there were any changes, they wanted us to make with the user interface.  
        </Text>
        <Text fontSize="2xl">
          Demonstrated ability to use and manage information
        </Text>
        <Text fontSize='xl'>
          The hardest part of the work experience arrived when it was time to implement the feature for displaying x-ray images on the web application the team had developed. It would not work if we built the application to display a normal PNG or JPEG image as the x-ray images used a unique format call DICOM. Fortunately, I discovered a package for displaying or managing DICOM x-ray images that we can use with React, the chosen framework. However, the package was originally written as a JavaScript library and its developer were just starting to migrate to React system. Therefore, there were not much information or documentation available about the package. After thorough research which took 4-5 days with cross referencing from an overwhelming number of websites, I had managed to render that UI of that package on our React app. After that one of my teammates was able to manipulate the package into the client requirement.   
        </Text>
        <Text fontSize="2xl">
          The ability to manage your own performance in a professional environment. 
        </Text>
        <Text fontSize='xl'>
          Eight weeks after the beginning of the internship, a covid outbreak happened and we were forced to work from home. The outbreak really took a hit to our performance as a team because we were not able to communicate face-to-face. However, I always kept contact with the biomedical team to keep track of their progress and provide help if they need someone from software team for assistance. In addition to that, I also report the team leader regarding what I was doing such as fixing the code structure written by biomedical team to remove errors and warnings. 
        </Text>
        <Text fontSize="2xl">
          A demonstrated ability to work as part of a team and to show leadership when required.
        </Text>
        <Text fontSize='xl'>
          I did not take the leader role of the software team during the internship. However, I guided them to the right direction when it comes to choosing the framework. Initially, I wanted to choose the framework, “Next”, as it is a better version of “React”. But the team needed to learn basic of “React” to use “Next”. Naturally, the team was not willing to go with “Next”. And I understood their feelings and accepted to use “React”. After that, I initiated the project and implemented routing system for page navigation so that the teams did not have to spend time learning routing system. With that, the team members only needed to focus on individual page that they were assigned to developed. And while they were doing that, I also helped them with positioning the user interface components such as table of patients’ information, sign in and registration forms.
        </Text>
      </Stack> */}
    </Box>
  );
};

export default coverletter;
