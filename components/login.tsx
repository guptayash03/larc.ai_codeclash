'use client'
import { signInWithGoogle, signOutWithGoogle } from '@/lib/firebase/auth'
import { deleteCookie, getCookie, setCookie } from 'cookies-next/client'
import { User } from 'firebase/auth'
import { LogOut } from 'lucide-react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Button } from './ui/button'

const Login = () => {
  const [user, setUser] = useState<User | null>()

  const handleLogIn = async () => {
    const googleUser = await signInWithGoogle()
    if (googleUser) {
      const jsonUser = JSON.stringify(googleUser)

      await setCookie('user', jsonUser)
      setUser(googleUser)

      toast.success('Login successful')
      if (window) window.location.href = '/'
    } else {
      toast.error('Login failed')
    }
  }

  const handleLogOut = async () => {
    await signOutWithGoogle()
    deleteCookie('user')
    setUser(null)
    toast.success('Logged out successfully')
    if (window) window.location.href = '/'
  }

  useEffect(() => {
    const userCookie = getCookie('user')

    if (userCookie) {
      try {
        const parsedUser = JSON.parse(userCookie)
        setUser(parsedUser)
      } catch (error) {
        console.error('Failed to parse user cookie:', error)
      }
    }
  }, [])

  return user ? (
    <div className="flex items-center gap-4">
      {/* <Image
        src={user.photoURL!}
        width={30}
        height={30}
        alt="Profile Pic"
        className="rounded-full"
      /> */}
      <Button variant={'ghost'} onClick={handleLogOut} className="px-3 py-4">
        <LogOut cursor={'pointer'} size={20} />
      </Button>
    </div>
  ) : (
    <Button onClick={handleLogIn} variant={'outline'}>
      SignIn
    </Button>
  )
}

export default Login
