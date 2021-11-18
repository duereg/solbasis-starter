import React from 'react';
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Contact() {
  const [hasWallet, setWallet] = React.useState(false);
  const [hasValidator, setValidator] = React.useState(false);

  function handleWalletChange(event) {
    setWallet(event.target.checked);
  }

  function handleValidatorChange(event) {
    setValidator(event.target.checked);
  }

  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      <Head>
        <title>SolCapture - Contact</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="js/navigation.js" type="text/javascript"></script>
      </Head>

      <Header />
      <div className="scroll-top rounded-full">
        <span className="icon-keyboard_arrow_up text-2xl"></span>
      </div>
      <div className="mx-auto my-10 max-w-6xl">
        <div className="mx-3 col-span-3 lg:col-span-2 px-2">
          <h1 className="title text-5xl mb-4">Contact</h1>
          <div className="content py-1"><p>To contact us, please fill out the form below.</p>
            <form name="contact" action="https://getform.io/f/6c5b0433-03aa-4b6c-bb68-decaa3e5125a" method="POST">
              <div className="switch-wrapper">
                <label className="p-4 bg-gray-200 border border-gray-200">Are you staking using a wallet?</label>
                <div className="switch">
                  <input  id="switch-wallet"
                          type="checkbox"
                          className="switch-input"
                          placeholder="Are you staking using a wallet?"
                          name="hasWallet"
                          checked={hasWallet} onChange={handleWalletChange} required=""/>
                  <label className="switch-label" for="switch-wallet">Switch</label>
                </div>
              </div>
              <div className="switch-wrapper">

                <label className="p-4 bg-gray-200 border border-gray-200">Are you running a validator?</label>
                <div className="switch">
                  <input  type="checkbox"
                          id="switch-validator"
                          placeholder="Are you running a validator?"
                          name="hasWallet"
                          className="switch-input"
                          required=""
                          checked={hasValidator} onChange={handleValidatorChange} />
                  <label className="switch-label" for="switch-validator">Switch</label>
                </div>
              </div>
              <div className="input">
                <input type="email" placeholder="Email" name="mail" className="p-4 bg-gray-200 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500" required=""/>
              </div>
              {hasWallet && (
              <div className="input">
                <input type="text" placeholder="Stake Address" name="stakeAddress" className="p-4 bg-gray-200 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500" required=""/>
              </div>
              )}
              {hasValidator && (
              <div className="input">
                <input type="text" placeholder="Vote Account Address" name="voteAccountAddress" className="p-4 bg-gray-200 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500" required=""/>
              </div>
              )}
              <div className="input">
                <textarea rows="5" cols="30" placeholder="Message" name="message" className="p-4 bg-gray-200 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500" required=""></textarea>
              </div>
              <input type="submit" value="Submit" className="px-8 py-2 duration-200 bg-gray-800 text-white cursor-pointer transition-colors hover:bg-gray-400"/>
            </form>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}
