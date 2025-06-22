// import { anthropic } from '@ai-sdk/anthropic'
import { createAzure } from '@ai-sdk/azure'
import { createAzure as createAzureCommunity } from '@quail-ai/azure-ai-provider'
// import { fireworks } from '@ai-sdk/fireworks'
import { google } from '@ai-sdk/google'
// import { groq } from '@ai-sdk/groq'
// import { mistral } from '@ai-sdk/mistral'
import { openai } from '@ai-sdk/openai'
import { perplexity } from '@ai-sdk/perplexity'
// import { createTogetherAI } from '@ai-sdk/togetherai'
// import { xai } from '@ai-sdk/xai'
import { bedrock, createAmazonBedrock } from '@ai-sdk/amazon-bedrock'
import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import {
  experimental_createProviderRegistry as createProviderRegistry,
  extractReasoningMiddleware,
  wrapLanguageModel
} from 'ai'
// import { deepseek } from '@ai-sdk/deepseek'
// import { createOllama } from 'ollama-ai-provider'
// import { createVertexAnthropic } from '@ai-sdk/google-vertex/anthropic';

export const registry = createProviderRegistry({
  openai,
  // anthropic,
  google,
  // mistral,
  // togetherai: createTogetherAI({
  //   apiKey: process.env.TOGETHERAI_API_KEY
  // }),
  azure: createAzure({
    apiKey: process.env.AZURE_API_KEY,
    resourceName: process.env.AZURE_RESOURCE_NAME,
    apiVersion: process.env.AZURE_API_VERSION
  }),
  azureGrok: createAzureCommunity({
    endpoint: process.env.AZURE_API_ENDPOINT,
    apiKey: process.env.AZURE_API_KEY
  }),
  azureDeepSeek: createAzureCommunity({
    endpoint: process.env.AZURE_API_ENDPOINT,
    apiKey: process.env.AZURE_API_KEY
  }),
  // groq,
  // ollama: createOllama({
  //   baseURL: `${process.env.OLLAMA_BASE_URL}/api`
  // }),
  // deepseek,
  // fireworks: {
  //   ...createFireworks({
  //     apiKey: process.env.FIREWORKS_API_KEY
  //   }),
  //   languageModel: fireworks
  // },
  // 'openai-compatible': createOpenAI({
  //   apiKey: process.env.OPENAI_COMPATIBLE_API_KEY,
  //   baseURL: process.env.OPENAI_COMPATIBLE_API_BASE_URL
  // }),
  // xai,
  // vertexProvider : createVertexAnthropic({
  //   project: process.env.GOOGLE_VERTEX_PROJECT || '',
  //   location: process.env.GOOGLE_VERTEX_LOCATION || '',
  //   googleAuthOptions: {
  //     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
  //     credentials: {
  //       client_email: process.env.GOOGLE_CLIENT_EMAIL || '',
  //       private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n') || '',
  //     },
  //   }
  // })
  perplexity,
  amazonClaude: createAmazonBedrock({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }),
  amazonDeepSeek: createAmazonBedrock({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }),
  amazonMeta: createAmazonBedrock({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }),
  amazonMistral: createAmazonBedrock({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }),
  amazonCohere: createAmazonBedrock({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }),
  amazonNova: createAmazonBedrock({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }),
  openrouter: createOpenRouter({
    apiKey: process.env.OPENROUTER_API_KEY
  }) as any
})

export function getModel(model: string) {
  const [provider, ...modelNameParts] = model.split(':') ?? []
  const modelName = modelNameParts.join(':')
  // if (model.includes('ollama')) {
  //   const ollama = createOllama({
  //     baseURL: `${process.env.OLLAMA_BASE_URL}/api`
  //   })

  //   // if model is deepseek-r1, add reasoning middleware
  //   if (model.includes('deepseek-r1')) {
  //     return wrapLanguageModel({
  //       model: ollama(modelName),
  //       middleware: extractReasoningMiddleware({
  //         tagName: 'think'
  //       })
  //     })
  //   }

  //   // if ollama provider, set simulateStreaming to true
  //   return ollama(modelName, {
  //     simulateStreaming: true
  //   })
  // }

  // if model is groq and includes deepseek-r1, add reasoning middleware
  // if (model.includes('groq') && model.includes('deepseek-r1')) {
  //   return wrapLanguageModel({
  //     model: groq(modelName),
  //     middleware: extractReasoningMiddleware({
  //       tagName: 'think'
  //     })
  //   })
  // }

  // // if model is fireworks and includes deepseek-r1, add reasoning middleware
  // if (model.includes('fireworks') && model.includes('deepseek-r1')) {
  //   return wrapLanguageModel({
  //     model: fireworks(modelName),
  //     middleware: extractReasoningMiddleware({
  //       tagName: 'think'
  //     })
  //   })
  // }

  if (
    model.includes('amazonDeepSeek') &&
    model.includes('us.deepseek.r1-v1:0')
  ) {
    return wrapLanguageModel({
      model: bedrock(modelName),
      middleware: extractReasoningMiddleware({
        tagName: 'think'
      })
    })
  }

  return registry.languageModel(model)
}

export function isProviderEnabled(providerId: string): boolean {
  switch (providerId) {
    case 'openai':
      return !!process.env.OPENAI_API_KEY
    // case 'anthropic':
    //   return !!process.env.ANTHROPIC_API_KEY
    case 'google':
      return !!process.env.GOOGLE_GENERATIVE_AI_API_KEY
    case 'azure':
      return !!(
        process.env.AZURE_API_KEY &&
        process.env.AZURE_RESOURCE_NAME &&
        process.env.AZURE_API_VERSION
      )
    case 'azureGrok':
      return !!(process.env.AZURE_API_KEY && process.env.AZURE_API_ENDPOINT)
    case 'azureDeepSeek':
      return !!(process.env.AZURE_API_KEY && process.env.AZURE_API_ENDPOINT)
    // case 'groq':
    //   return !!process.env.GROQ_API_KEY
    // case 'ollama':
    //   return !!process.env.OLLAMA_BASE_URL
    // case 'deepseek':
    //   return !!process.env.DEEPSEEK_API_KEY
    // case 'fireworks':
    //   return !!process.env.FIREWORKS_API_KEY
    // case 'openai-compatible':
    //   return (
    //     !!process.env.OPENAI_COMPATIBLE_API_KEY &&
    //     !!process.env.OPENAI_COMPATIBLE_API_BASE_URL
    //   )
    // case 'vertexAnthropic':
    //   return !!(process.env.GOOGLE_VERTEX_PROJECT &&
    //            process.env.GOOGLE_VERTEX_LOCATION &&
    //            process.env.GOOGLE_CLIENT_EMAIL &&
    //            process.env.GOOGLE_PRIVATE_KEY)
    // case 'xai':
    //   return !!process.env.XAI_API_KEY
    // case 'mistral':
    //   return !!process.env.MISTRAL_API_KEY
    // case 'togetherai':
    //   return !!process.env.TOGETHERAI_API_KEY
    case 'perplexity':
      return !!process.env.PERPLEXITY_API_KEY
    case 'openrouter':
      return !!process.env.OPENROUTER_API_KEY
    case 'amazonClaude':
      return !!(
        process.env.AWS_REGION &&
        process.env.AWS_ACCESS_KEY_ID &&
        process.env.AWS_SECRET_ACCESS_KEY
      )
    case 'amazonDeepSeek':
      return !!(
        process.env.AWS_REGION &&
        process.env.AWS_ACCESS_KEY_ID &&
        process.env.AWS_SECRET_ACCESS_KEY
      )
    case 'amazonMeta':
      return !!(
        process.env.AWS_REGION &&
        process.env.AWS_ACCESS_KEY_ID &&
        process.env.AWS_SECRET_ACCESS_KEY
      )
    case 'amazonMistral':
      return !!(
        process.env.AWS_REGION &&
        process.env.AWS_ACCESS_KEY_ID &&
        process.env.AWS_SECRET_ACCESS_KEY
      )
    case 'amazonCohere':
      return !!(
        process.env.AWS_REGION &&
        process.env.AWS_ACCESS_KEY_ID &&
        process.env.AWS_SECRET_ACCESS_KEY
      )
    case 'amazonNova':
      return !!(
        process.env.AWS_REGION &&
        process.env.AWS_ACCESS_KEY_ID &&
        process.env.AWS_SECRET_ACCESS_KEY
      )
    default:
      return false
  }
}

export function getToolCallModel(model?: string) {
  const [provider, ...modelNameParts] = model?.split(':') ?? []
  const modelName = modelNameParts.join(':')
  switch (provider) {
    // case 'deepseek':
    //   return getModel('deepseek:deepseek-chat')
    // case 'fireworks':
    //   return getModel(
    //     'fireworks:accounts/fireworks/models/llama-v3p1-8b-instruct'
    //   )
    // case 'groq':
    //   return getModel('groq:llama-3.1-8b-instant')
    // case 'ollama':
    //   const ollamaModel =
    //     process.env.NEXT_PUBLIC_OLLAMA_TOOL_CALL_MODEL || modelName
    //   return getModel(`ollama:${ollamaModel}`)
    case 'google':
      return getModel('google:gemini-2.0-flash')
    default:
      return getModel('openai:gpt-4o-mini')
  }
}

export function isToolCallSupported(model?: string) {
  const [provider, ...modelNameParts] = model?.split(':') ?? []
  const modelName = modelNameParts.join(':')

  // if (provider === 'ollama') {
  //   return false
  // }

  if (provider === 'google') {
    return false
  }

  // Deepseek R1 is not supported
  // Deepseek v3's tool call is unstable, so we include it in the list
  return !modelName?.includes('deepseek')
}

export function isReasoningModel(model: string): boolean {
  if (typeof model !== 'string') {
    return false
  }
  return (
    model.includes('deepseek-r1') ||
    model.includes('deepseek-reasoner') ||
    model.includes('o3-mini')
  )
}
