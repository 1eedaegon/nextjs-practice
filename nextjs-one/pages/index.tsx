import type { NextPage } from 'next'
import { useState } from 'react'
import NavBar from '../components/NavBar'


const Home: NextPage = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <NavBar/>
      <h1>hi!</h1>
    </div>
  )
}

export default Home
