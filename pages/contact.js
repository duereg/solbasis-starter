import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Contact() {
  return (
    <div>
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
            <img src="img/slide/slide01.jpg" alt="CityScape" />
            <div className="s-fade-txt">
              <h1 className="text-8xl text-white">Contact</h1>
              <h2 className="text-4xl text-white">Never</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
