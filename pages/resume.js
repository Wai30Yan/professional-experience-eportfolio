import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import Contain from '../components/Contain'

const resume = () => {
  return (
    <Contain>
      <Link
          href="/Wai Yan Resume.pdf"
      >
        <Button>
          <a
            alt="alt text"
            target="_blank"
            rel="noopener noreferrer"
          >Download FIle</a>

        </Button>
      </Link>

    </Contain>
  )
}

export default resume