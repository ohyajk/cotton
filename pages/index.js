import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './navbar'
import HomePage from './home'

export default function Home() {
  return (
    <div className='h-screen w-screen bg-green-100'>
      <Navbar />
      <HomePage />
    </div>
  )
}
