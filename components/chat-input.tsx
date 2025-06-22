import { Paperclip } from 'lucide-react'
import React from 'react'

const ChatInput = () => {
  return (
    <div className='mt-1.5 p-0 hidden md:block'>
        <button type='button'>
            <Paperclip strokeWidth={2.25} className='text-white/90 text-sm items-center' />
        </button>
    </div>
  )
}

export default ChatInput
