import { createManualToolStreamResponse } from '@/lib/streaming/create-manual-tool-stream'
import { createToolCallingStreamResponse } from '@/lib/streaming/create-tool-calling-stream'
import { Model } from '@/lib/types/models'
import { Router } from '@/lib/types/routers'
import { isProviderEnabled } from '@/lib/utils/registry'
import { cookies } from 'next/headers'

export const maxDuration = 30

const DEFAULT_MODEL: Model = {
  id: 'gpt-4.1',
  name: 'ChatGPT 4.1',
  provider: 'OpenAI',
  providerId: 'azure',
  enabled: true,
  toolCallType: 'native'
}

export async function POST(req: Request) {
  try {
    const { messages, id: chatId } = await req.json()
    const referer = req.headers.get('referer')
    const isSharePage = referer?.includes('/share/')

    if (isSharePage) {
      return new Response('Chat API is not available on share pages', {
        status: 403,
        statusText: 'Forbidden'
      })
    }

    const cookieStore = await cookies()
    const modelJson = cookieStore.get('selectedModel')?.value
    const routerJson = cookieStore.get('router')?.value
    const clientSide = cookieStore.get('client-side')?.value === 'true'
    const searchMode = cookieStore.get('search-mode')?.value === 'true'

    let selectedModel = DEFAULT_MODEL
    let router = { routing: false } as Router

    if (modelJson) {
      try {
        selectedModel = JSON.parse(modelJson) as Model
      } catch (e) {
        console.error('Failed to parse selected model:', e)
      }
    }

    if (routerJson) {
      try {
        router = JSON.parse(routerJson) as Router
      } catch (e) {
        console.error('Failed to parse selected router:', e)
      }
    }

    if (
      !isProviderEnabled(selectedModel.providerId) ||
      selectedModel.enabled === false
    ) {
      return new Response(
        `Selected provider is not enabled ${selectedModel.providerId}`,
        {
          status: 404,
          statusText: 'Not Found'
        }
      )
    }

    if (!clientSide) {
      return new Response('Fuck Off', {
        status: 200
      })
    }

    if (router.routing) {
      const prompt = messages[messages.length - 1].content

      const res = await fetch(
        `${process.env.LARCROUTER_ENDPOINT}/api/v1/llmrouter/`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt, preference: 'accuracy' })
        }
      )

      const data = await res.json()
      selectedModel = data.message.selected_model

      await cookieStore.set(
        'bestSelectedModel',
        selectedModel.name.replace(/ /g, '-')
      )

      // return createRouterStreamResponse({
      //   messages,
      //   model: {
      //     id: 'openrouter/auto',
      //     name: 'Auto Routing',
      //     provider: 'openrouter',
      //     providerId: 'openrouter',
      //     enabled: false,
      //     toolCallType: 'native'
      //   },
      //   chatId,
      //   searchMode
      // })
    }

    const supportsToolCalling = selectedModel.toolCallType === 'native'

    return supportsToolCalling
      ? createToolCallingStreamResponse({
          messages,
          model: selectedModel,
          chatId,
          searchMode
        })
      : createManualToolStreamResponse({
          messages,
          model: selectedModel,
          chatId,
          searchMode
        })
  } catch (error) {
    console.error('API route error:', error)
    return new Response('Error processing your request', {
      status: 500,
      statusText: 'Internal Server Error'
    })
  }
}
