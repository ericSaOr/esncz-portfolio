import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title> My Portfolio Page!</title>
      </Head>

      {/* Header */}
      <Header />
      {/* Hero */}

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      { /* Projects */}

      { /* Contact Me */}

      <h1 className='text-blue-500'>building a greate portfolio page</h1>
    </div>

  )
}
 