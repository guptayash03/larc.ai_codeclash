'use client'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { getCookie, setCookie } from '@/lib/utils/cookies'
import * as Switch from '@radix-ui/react-switch'
import { InfoIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

const RouterToggle = ({
  selectedModel,
  isLoading
}: {
  selectedModel: string | undefined
  isLoading: boolean
}) => {
  const [isRouterEnabled, setIsRouterEnabled] = useState(false)
  const [open, setOpen] = useState(false)

  const handleToggle = (checked: boolean) => {
    setIsRouterEnabled(checked)

    if (checked) {
      setCookie(
        'router',
        JSON.stringify({ routing: checked, provider: 'larcrouter' })
      )
    } else {
      setCookie('router', JSON.stringify({ routing: checked }))
    }
  }

  useEffect(() => {
    let router = getCookie('router')
    if (router) {
      setIsRouterEnabled(JSON.parse(router)!['routing'] as boolean)
    } else {
      setIsRouterEnabled(false)
    }
  }, [isRouterEnabled])

  return (
    <div className="flex items-center  space-x-4">
      <Switch.Root
        className={`w-16 h-9 bg-gray-300 rounded-full relative ${
          isRouterEnabled ? 'bg-yellow-500' : 'bg-slate-400'
        }`}
        onCheckedChange={checked => handleToggle(checked)}
      >
        <div
          className={`absolute w-full h-full text-sm font-bold text-white ${
            isRouterEnabled ? 'right-2' : 'left-2'
          }`}
        >
          Pro
        </div>
        <Switch.Thumb
          className={`block w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
            isRouterEnabled ? 'translate-x-10' : 'translate-x-1'
          }`}
        />
      </Switch.Root>

      <span className="text-sm font-semibold text-gray-400 md:flex gap-2 items-center">
        <div className="flex flex-col  gap-0">
          <div className="flex items-center gap-1 text-gray-400">
            Larc LLM Router
            <AlertDialog open={open} onOpenChange={setOpen}>
              <AlertDialogTrigger asChild>
                <InfoIcon className="cursor-pointer" size={12} />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Larc.Ai LLM Router</AlertDialogTitle>
                  <AlertDialogDescription>
                    <p className="text-sm text-gray-300">
                      Routing Magic is a feature that automatically selects the
                      best AI Model according to your question or task. To
                      enable it, turn on the PRO Mode
                    </p>
                    <div className="flex flex-col mt-4 gap-1">
                      <p className="text-xs text-orange-400">
                        This feature is currently in beta and may not work as
                        expected.
                      </p>
                      <p className="text-xs text-red-500">
                        If you encounter any issues or want to give feedback,
                        please contact us at nihal.sharma@larc.ai |
                        yash.gupta@larc.ai
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
            </AlertDialog>
          </div>
          {selectedModel && isRouterEnabled ? (
            <span className="transition-all animate-pulse text-gray-200 text-xs">
              {selectedModel.replace(/-/g, ' ')}
            </span>
          ) : (
            <span className="text-gray-500 text-xs">No model selected</span>
          )}
        </div>
      </span>
    </div>
  )
}

export default RouterToggle
