import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'

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
