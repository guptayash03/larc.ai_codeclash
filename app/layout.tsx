import Footer from '@/components/footer'
import Header from '@/components/header'
import { Sidebar } from '@/components/sidebar'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { cookies, headers } from 'next/headers'
import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const title = 'Larc Ai - New Chat'
const description = 'A Smart Platform for All LLMs & Agents'

export const metadata: Metadata = {
  metadataBase: new URL('https://larc.ai'),
  title,
  description,
  openGraph: {
    title,
    description
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@miiura'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const headersList = await headers()
  const pathname =
    headersList.get('x-pathname') || headersList.get('x-url') || ''
  const isHomePath = pathname.includes('/home')
  const cookieStore = await cookies()
  let user = cookieStore.get('user')?.value

  // For home routes, return minimal wrapper with only necessary styles/scripts
  if (isHomePath) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body>{children}</body>
      </html>
    )
  }
  if (user) {
    user = JSON.parse(user)
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans antialiased', fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex">
            {user && (
              <div className="dark:bg-popover bg-card text-gray-200 max-w-[250px] h-screen overflow-y-auto md:min-w-[220px] border-r-2">
                <Sidebar user={user} />
              </div>
            )}
            <div className="bg-background flex-1 h-screen overflow-hidden relative">
              <Header user={user} />
              {children}
              <Footer />
              <Toaster />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
