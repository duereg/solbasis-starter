import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      <Head>
        <title>SolCapture - What We Do</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="js/navigation.js" type="text/javascript"></script>
      </Head>

      <Header />
          <div className="scroll-top rounded-full">
            <span className="icon-keyboard_arrow_up text-2xl"></span>
          </div>
          <div className="mx-auto my-10 max-w-6xl">
            <div className="mx-3 col-span-3 lg:col-span-2 px-2">
              <h1 className="title text-5xl mb-4">What We Do</h1>
              <div className="content py-1">
                <p>SolCapture tracks the cost basis of the staking rewards you earn on the Solana blockchain.</p>
                <p>We provide an upfront history-to-date of your Solana transactions.</p>
                <p>We also provide ongoing monthly reports containing your taxable transactions to help with your reporting needs.</p>
                <p>This can help minimize tax gains and maximize tax losses.</p>
                <p>Additionally, our reporting method allows you to choose among the Average Cost, FIFO, or LIFO cost basis method. </p>
                <p>This saves you tax preparation fees when it is time to prepare your tax returns.</p>
              </div>
            </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}
