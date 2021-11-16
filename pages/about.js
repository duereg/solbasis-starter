import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      <Head>
        <title>SolCapture - About Us</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="js/navigation.js" type="text/javascript"></script>
      </Head>

      <Header />
      <div className="scroll-top rounded-full">
        <span className="icon-keyboard_arrow_up text-2xl"></span>
      </div>
      <div className="mx-auto my-10 max-w-6xl">
        <div className="mx-3 col-span-3 lg:col-span-2 px-2">
          <h1 className="title text-5xl mb-4">About</h1>
          <div className="content py-1">
            <p>SolCapture is founded by Accounting and Tech Professionals. We offer specialized accounting analytic services within the Solana Blockchain.  We currently offer a staking reward monitoring service which tracks taxable events related to staking rewards.</p>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}
