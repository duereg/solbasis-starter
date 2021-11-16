
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
            <p>Staking rewards can be earned every 2-4 days on the Solana blockchain. Each reward is currently viewed as a taxable event and treated as ordinary income.
              When the reward is earned, we record the cost basis of the reward which can be used at a later date should a user decide to sell their token.
              Our reporting process allows individuals to plan their tax year whether that means projecting quarterly estimated tax payments or recording all taxable transactions at the end of the year. </p>
            <p>The sale of a token is currently considered a taxable event for U.S. citizens and a taxpayer needs to have the cost basis to determine if a realized gain or loss was incurred.
              The cost basis is the original value or purchase price and date of an asset, in this case Sol.
              With the reports we provide, users aren’t left guessing when the reward was earned or the value of the reward at the time it was earned.
              If you plan on holding your token for a long time, we have a stored history of your staking rewards.
              The higher your cost basis, the less tax you will pay down the road when you sell.</p>
            <p>SolCapture's accounting protocols track ongoing staking rewards for individuals running a validator or staking Sol with a validator.
              If you are interested in receiving information about taxable events related to staking please <a href="/contact">reach out</a> to us.</p>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}
