import { HistoryIcon, ImageIcon, VideoIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'
import { IoHome } from 'react-icons/io5'
import { HistoryList } from './history-list'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@radix-ui/react-alert-dialog'
import { AlertDialogFooter, AlertDialogHeader } from './ui/alert-dialog'

export async function Sidebar({ user }: { user: any }) {
  return (
    <div className="md:flex flex-col hidden h-[100%] relative p-2.5 ">
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-2">
          <Link
            href={'/'}
            className=" text-base p-1.5 md:p-2 rounded-md dark:text-primary text-input"
          >
            <IoHome />
          </Link>
          <a href="/home">
            <Image
              src="/logo.png"
              className="opacity-85"
              alt="Larc AI"
              width={80}
              height={80}
            />
            <span className="sr-only">Larc AI</span>
          </a>
        </div>
        <div className="flex items-center">
          <Link href={'/'} className="text-lg mr-2">
            <HiPencilAlt />
          </Link>
        </div>
      </div>
      <div className="flex flex-col h-full justify-center overflow-y-scroll scrollbar-hide">
        {/* <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger asChild>
            <Button>
              <div className="flex items-center gap-1 p-1 mt-8 mb-2">
                <HistoryIcon size={16} />
                <p className="font-semibold text-sm font-sans ">
                  Generate Images
                </p>
              </div>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Larc Routing Magic</AlertDialogTitle>
              <AlertDialogDescription>
                <p className="text-sm text-gray-300">
                  Routing Magic is a feature that allows you to route your
                  requests through different providers. When enabled, it will
                  use the OpenRouter provider for routing.
                </p>
                <div className="flex flex-col mt-4 gap-1">
                  <p className="text-sm text-orange-400">
                    This feature is currently in beta and may not work as
                    expected.
                  </p>
                  <p className="text-sm text-red-500">
                    If you encounter any issues, please report them to us at
                    nihal.sharma@larc.ai | yash.gupta@larc.ai
                  </p>
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogTrigger asChild>
                <Button
                  className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  Close
                </Button>
              </AlertDialogTrigger>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog> */}
        <div className="flex flex-col items-center gap-2 p-1 mt-8 mb-2 pb-4 border-b">
          <div className="flex items-center gap-2 bg-gray-600 cursor-pointer w-full p-2 rounded-md hover:bg-gray-500 transition-colors">
            <VideoIcon size={16} />
            <p className="font-semibold text-sm font-sans "> Larc Video Gen </p>
          </div>
          <div className="flex items-center gap-2 bg-gray-600 cursor-pointer w-full p-2 rounded-md hover:bg-gray-500 transition-colors">
            <ImageIcon size={16} />
            <p className="font-semibold text-sm font-sans "> Larc Image Gen </p>
          </div>
        </div>

        <div className="flex items-center gap-1 p-1  mb-2">
          <HistoryIcon size={16} />
          <p className="font-semibold text-sm font-sans "> History </p>
        </div>
        <HistoryList userId={user['uid']} />
      </div>
    </div>
  )
}
