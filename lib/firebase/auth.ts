import {
  type User,
  onAuthStateChanged as _onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'

import toast from 'react-hot-toast'
import { auth } from './index'

export function onAuthStateChanged(callback: (authUser: User | null) => void) {
  return _onAuthStateChanged(auth, callback)
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider()

  try {
    const result = await signInWithPopup(auth, provider)

    if (!result || !result.user) {
      toast.error('Google sign in failed')
    }

    return result.user
  } catch (error) {
    toast.error('Error signing in with Google')
    console.log(error)
  }
}

export async function signOutWithGoogle() {
  try {
    await auth.signOut()
  } catch (error) {
    console.error('Error signing out with Google', error)
  }
}
