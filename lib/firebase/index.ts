import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'larcai.firebaseapp.com',
  projectId: 'larcai',
  storageBucket: 'larcai.firebasestorage.app',
  messagingSenderId: '963850102101',
  appId: '1:963850102101:web:43124c5566e181db3f7bdc',
  measurementId: 'G-X51RGP976M'
}
// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
export default app
