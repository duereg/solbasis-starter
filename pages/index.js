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
              <h1 className="text-8xl text-white">SolCapture</h1>
              <h2 className="text-4xl text-white">Coming Soon</h2>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}
