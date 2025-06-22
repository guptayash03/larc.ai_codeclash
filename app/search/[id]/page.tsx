import { Chat } from '@/components/chat'
import { getChat } from '@/lib/actions/chat'
import { getModels } from '@/lib/config/models'
import { convertToUIMessages } from '@/lib/utils'
import { cookies } from 'next/headers'
import { notFound, redirect } from 'next/navigation'

export const maxDuration = 60

export async function generateMetadata(props: {
  params: Promise<{ id: string }>
}) {
  const { id } = await props.params
  const cookieStore = await cookies()
  const user = cookieStore.get('user')?.value
  const chat = await getChat(id, user ? JSON.parse(user)['uid'] : 'anonymous')
  return {
    title: chat?.title.toString().slice(0, 50) || 'Search'
  }
}

export default async function SearchPage(props: {
  params: Promise<{ id: string }>
}) {
  const cookieStore = await cookies()
  const user = cookieStore.get('user')?.value

  const userId = user ? JSON.parse(user)['uid'] : 'anonymous'
  const { id } = await props.params

  const chat = await getChat(id, userId)
  // convertToUIMessages for useChat hook
  const messages = convertToUIMessages(chat?.messages || [])

  if (!chat) {
    redirect('/')
  }

  if (chat?.userId !== userId) {
    notFound()
  }

  const models = await getModels()
  return <Chat id={id} savedMessages={messages} models={models} />
}
