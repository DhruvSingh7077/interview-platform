import { useState } from 'react'
import {SignInButton} from "@clerk/clerk-react"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>welcome to page</h1>
     <SignInButton  mode="modal"/>
    </>
  )
}

export default App
