import HistoryContainer from './history-container'
import { ModeToggle } from './mode-toggle'

import Image from 'next/image'
import Login from './login'

export const Header = async ({ user }: { user: any }): Promise<JSX.Element> => {
  return (
    <header className="absolute  w-full p-2 flex justify-between items-center z-10 backdrop-blur lg:backdrop-blur-none bg-background/80 lg:bg-transparent">
      <div className="flex gap-0.5 items-center">
        {user && <HistoryContainer />}
        {!user && (
          <div>
            <a href="/home">
              <Image
                src="/logo.png"
                className="opacity-85 ml-4"
                alt="Larc AI"
                width={100}
                height={100}
              />
              <span className="sr-only">Larc AI</span>
            </a>
          </div>
        )}
      </div>
      <div className="flex gap-1.5 items-center">
        <Login />
        <ModeToggle />
      </div>
    </header>
  )
}

export default Header
