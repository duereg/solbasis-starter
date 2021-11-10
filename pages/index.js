import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

//  className="container"
export default function Home() {
  return (
    <div>
      <Head>
        <title>SolCapture</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Welcome to my app!" />
      <div className="hero-container">
        <div class="hero-wrapper">
          <div class="hero-slide">
              <img src="img/slide/slide01.jpg" alt="" />
              <div class="s-fade-txt">
                  <h1 class="text-8xl text-white">SolCapture</h1>
                  <h2 class="text-4xl text-white">Coming Soon</h2>
              </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
