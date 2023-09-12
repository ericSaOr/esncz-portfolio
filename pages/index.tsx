import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 xl:items-center">
      <Head>
        <title> My Portfolio Page!</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>
      {/* About */}

      {/* Experience */}

      {/* Skills */}

      { /* Projects */}

      { /* Contact Me */}

      <h1 className='text-blue-500'>building a greate portfolio page</h1>
    </div>

  )
}
 