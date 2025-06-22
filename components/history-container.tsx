import { cookies } from 'next/headers'
import React from 'react'
import { History } from './history'
import { HistoryList } from './history-list'

const HistoryContainer: React.FC = async () => {
  const enableSaveChatHistory = process.env.ENABLE_SAVE_CHAT_HISTORY === 'true'
  if (!enableSaveChatHistory) {
    return null
  }
  const cookieStore = await cookies()
  const user = cookieStore.get('user')?.value

  const userId = user ? JSON.parse(user)['uid'] : 'anonymous'

  return (
    <div className="block md:hidden">
      <History>
        <HistoryList userId={userId} />
      </History>
    </div>
  )
}

export default HistoryContainer
