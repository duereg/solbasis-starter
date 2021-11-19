
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function About() {
  return (

    <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      <Head>
        <title>SolCapture - Why Do You Need Our Service?</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="js/navigation.js" type="text/javascript"></script>
      </Head>

      <Header />
      <div className="scroll-top rounded-full">
        <span className="icon-keyboard_arrow_up text-2xl"></span>
      </div>
      <div className="mx-auto my-10 max-w-6xl">
        <div className="mx-3 col-span-3 lg:col-span-2 px-2">
          <h1 className="title text-5xl mb-4">Why do you need our service?</h1>
          <div className="content py-1">
            <p>You can earn staking rewards every 2-4 days on the Solana blockchain.
              Rewards are viewed as a taxable event and treated as ordinary income.
              The sale of a token is a taxable event for U.S. citizens and
              a taxpayer needs to know the cost basis of the sale for their taxes.
            </p>

            <p>So why us?</p>

            <p>
              With the reports we provide, we track when your rewards were earned and the cost basis of the reward at the time it was earned.
              Our reporting process allow you to plan their tax year whether that means projecting
              quarterly estimated tax payments or recording all taxable transactions at the end of the year.</p>

            <p>If you plan on holding your tokens for a long time, we can store a history of your staking rewards.
              The higher your cost basis, the less tax you will pay down the road when you sell.</p>

            <p>SolCapture's accounting protocols track ongoing staking rewards if you run a validator or stake Sol with a validator.
              If you are interested in receiving information about taxable events related to staking please <a href="/contact">reach out</a> to us.</p>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}
