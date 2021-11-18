import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function About() {
  return (

    <div className="flex flex-col min-h-screen">
      <style>

      </style>
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
              <p>SolCapture is founded by Accounting and Tech Professionals.We offer specialized accounting analytic services within the Solana Blockchain.We currently offer a staking reward monitoring service which tracks taxable events related to staking rewards.</p>
            </div>
            <h1 className="title text-4xl mb-4">Founding Team</h1>
            <div className="content py-1">
              <div className="row-wrapper">
                <div className="photo-wrapper">
                  <div className="profile-picture">
                    <img width="200" title="Andrew Creedon, CPA, CFE, CEO" src="/img/creedon3.png" height="200" alt="Andrew Creedon, CPA, CFE, CEO" className="profile-picture-image" />
                  </div>
                </div>
                <div className="bio-wrapper">
                  <p><a href="https://www.linkedin.com/in/andrew-creedon-cpa-cfe-0741b123/">Andrew Creedon</a> is an early Solana Validator, Certified Public Accountant, and Certified Fraud Examiner. </p>
                  <p>Mr. Creedon has developed complex financial models to accurately identify various assets and apply different accounting protocols to properly record and recognize each asset.</p>
                  <p>Mr. Creedon specializes in financial analysis and accounting services across a variety of industries. </p>
                </div>
              </div>
              <div className="row-wrapper">
                <div className="photo-wrapper">
                  <div className="profile-picture">
                    <img width="200" title="Matt Blair, SVP of Software" src="/img/matt.png" height="200" alt="Matt Blair, SVP of Software" className="profile-picture-image" />
                  </div>
                </div>
                <div className="bio-wrapper">
                  <p><a href="https://www.linkedin.com/in/mattblair/">Matt Blair</a> is a tech professional and Open Source software enthusiast in the Bay Area,
                    author of libraries such as <a href="https://github.com/duereg/js-algorithms">js-algorithms</a>, <a href="https://github.com/duereg/songbird">songbird</a>,
                    contributor to projects such as <a href="https://github.com/emberjs/ember.js">ember</a> and <a href="https://github.com/emberjs/data">ember-data</a>,
                    as well as a maintainer of <a href="https://github.com/btford/write-good">write-good</a>.</p>
                  <p><a href="https://blog.mattblair.co/">Technical Writer</a>, Presenter at technical meetups and <a href="https://www.youtube.com/watch?v=WiANbp0alPs">conference speaker</a>.</p>
                  <p>Alumni of such companies as Stripe, Slack, and Rivian</p>
                </div>
              </div>
              <div className="row-wrapper">
                <div className="photo-wrapper">
                  <div className="profile-picture">
                    <img width="200" title="Daniel Agren, SVP of Systems" src="/img/Danny-2.png" height="200" alt="Daniel Agren, SVP of Systems" className="profile-picture-image" />
                  </div>
                </div>
                <div className="bio-wrapper">
                  <p><a href="https://www.linkedin.com/in/dagren/">Daniel Agren</a> is a tech professional who specializes in Computer Crime, Forensics, and Auditing.
                    He deals in computer Hardware Fundamentals as they relate to information defense technologies and Information Security Fundamentals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main >
      <Footer />
    </div >
  )
}
