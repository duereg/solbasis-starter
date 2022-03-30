import _ from 'lodash';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router'
import Script from 'next/script';

import Header from '@components/Header';
import Footer from '@components/Footer';
import { PayPage } from '@components/PayPage';

export default function GenerateReport() {
  const router = useRouter();
  const checkout = router.query;

  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      <Head>
        <title>SolCapture - Checkout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Script src="js/navigation.js" type="text/javascript"></Script>

      <Header />
      <div className="scroll-top rounded-full">
        <span className="icon-keyboard_arrow_up text-2xl"></span>
      </div>
      <div className="mx-auto my-10 max-w-6xl">
        <div className="mx-3 col-span-3 lg:col-span-2 px-2">
          <h1 className="title text-5xl mb-4">Checkout</h1>
          <div className="content py-1">
            <PayPage checkout={JSON.stringify(checkout)} />
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}
