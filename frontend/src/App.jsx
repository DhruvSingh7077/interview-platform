

// export default App 
import { useState } from 'react'
import {SignInButton, SignOutButton,SignedIn,SignedOut,UserButton} from "@clerk/clerk-react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>welcome to page</h1>

     <SignedOut>
     <SignInButton  mode="modal"/>
     <button>Login</button>
     </SignedOut>

     <SignedIn>
      <SignOutButton />
     </SignedIn>

     <UserButton />
    </>
  )
}

export default App