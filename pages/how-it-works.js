import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function About() {
  return (

    <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      <Head>
        <title>SolCapture - How It Works</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="js/navigation.js" type="text/javascript"></script>
      </Head>

      <Header />
      <div className="scroll-top rounded-full">
        <span className="icon-keyboard_arrow_up text-2xl"></span>
      </div>
      <div className="mx-auto my-10 max-w-6xl">
        <div className="mx-3 col-span-3 lg:col-span-2 px-2">
          <h1 className="title text-5xl">How it works</h1>
          <div className="content py-1">
            <ol>
              <li>Sign up with SolCapture and we'll analyze the Solana blockchain on your behalf.</li>
              <li>We apply accounting protocols to the Solana blockchain.</li>
              <li>We compute results applying different cost basis methodologies.</li>
              <li>We provide cost basis using Specific Lot Identification, Average Cost Basis, FIFO, or LIFO.</li>
              <li>We list the transaction in such a way to allow using FIFO or LIFO accounting principles.</li>
              <li>We generate a history of your transactions for you.</li>
            </ol>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}
