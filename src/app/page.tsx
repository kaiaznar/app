import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='h-full bg-blue-200'>
      <Head>
        <title> next app</title>
        <meta name="description" content='photograpy portifolio of kai aznar' />
      </Head>
      
      <main >
          <p>Place holder is fun</p>
          <header></header>

      </main>
      <footer>
        <p>Place holder this one is not</p>
      </footer>
    </div>
   
  )
}
