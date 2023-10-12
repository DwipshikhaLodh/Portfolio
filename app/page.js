'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import NavBar from './components/NavBar'
import Intro from './components/intro'
import Projects from './components/Projects'
import Tech from './components/Tech'
import Contact from './components/Contact'
import Illus from './components/Illustration'
import Footer from './components/Footer'
import Experience from './components/Experience'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false
    })
  }, [])
  return (
    <main className={styles.body}>
      <NavBar/>
      <Intro/>
      <Illus/>
      <Projects/>
      <Experience/>
      <Tech/>
      <Contact/>
      <Footer/>
    </main>
  )
}
