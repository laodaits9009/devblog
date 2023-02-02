import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-screen flex flex-col overflow-auto bg-zinc-600 font-poppins">
        <section className="container mx-auto">
          <div className="mt-3 flex flex-col items-center">
            <h1 className="text-[3rem]">Welcome to devblog !!!</h1>
            <p>A full-stack blog</p>
          </div>
        </section>
      </main>
    </>
  )
}
