import { Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { SiInstagram, SiLinkedin, SiYoutube } from 'react-icons/si'
import { Button } from './ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0 hidden lg:block">
      <div className="flex justify-end">
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="/home" target="_blank">
            <Home size={22} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://www.instagram.com/larc.ai__" target="_blank">
            <SiInstagram size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link
            href="https://www.linkedin.com/in/guptayash03/"
            target="_blank"
          >
            <SiLinkedin size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://www.youtube.com/@YashGupta.Official" target="_blank">
            <SiYoutube size={20} />
          </Link>
        </Button>
      </div>
    </footer>
  )
}

export default Footer
