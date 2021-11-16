import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      <Head>
        <title>SolCapture</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="js/navigation.js" type="text/javascript"></script>
      </Head>

      <Header />
      <div className="scroll-top rounded-full">
        <span className="icon-keyboard_arrow_up text-2xl"></span>
      </div>
      <div className="hero-container">
        <div className="hero-wrapper">
          <div className="hero-slide">
            <img src="img/slide/slide01.jpg" alt="" />
            <div className="s-fade-txt">
              <h3 className="text-4xl text-white px-8 py-2 bg-gray-800 bold">Track staking rewards earned on Solana</h3>
              <h2 className="text-3xl text-white px-8 py-2 bg-gray-800">All you need is a stake address & an email address</h2>
              <h3 className="text-3xl text-white"><a href="/contact" className="px-8 py-2 duration-200 bg-gray-800 text-white cursor-pointer transition-colors hover:bg-gray-400">Get Started Now</a></h3>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}
