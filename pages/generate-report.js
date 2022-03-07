import _ from 'lodash';
import React from 'react';
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

import TextField from '@mui/material/TextField';
import { LoadingButton } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import axios from 'axios';
import { encodeURL, createQR } from '@solana/pay';
import { PublicKey } from '@solana/web3.js';
import BigNumber from 'bignumber.js';

export default function Contact() {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [stakeAddress, setStakeAddress] = React.useState('');
  const [solanaUrl, setSolanaUrl] = React.useState('');
  const [amount, setAmount] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const ref = React.useRef(null);

  function onButtonClick() {
    setLoading(true);
    const url = `https://akyeck1ms6.execute-api.us-east-1.amazonaws.com/generateQuote?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&stakeAddress=${stakeAddress}&reportType=json`;
    axios.get(url).then(results => {
      const json = results.data;
      setAmount(json.amount);

      const checkout = {...json,
        recipient: new PublicKey(json.recipient),
        amount: new BigNumber(json.amount),
        reference: new PublicKey(json.reference), // this is the transaction signature!
      };

      return checkout;
    }).then(checkout => {
      const url = encodeURL(checkout);
      setSolanaUrl(url);
      return url;
    }).then(url => {
      const qrCode = createQR(url, 200);
      qrCode.append(ref.current);
      return qrCode;
    });
  }

  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      <Head>
        <title>SolCapture - Generate Report</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="js/navigation.js" type="text/javascript"></script>
      </Head>

      <Header />
      <div className="scroll-top rounded-full">
        <span className="icon-keyboard_arrow_up text-2xl"></span>
      </div>
      <div className="mx-auto my-10 max-w-6xl">
        <div className="mx-3 col-span-3 lg:col-span-2 px-2">
          <h1 className="title text-5xl mb-4">Generate Report</h1>
          <div className="content py-1"><p>To generate a stake report, please fill out the form below.</p>
              <div className="input">
                <input
                  type="text"
                  onChange={(event) => {
                    setStakeAddress(event.target.value);
                  }}
                  placeholder="Stake Address"
                  name="stakeAddress"
                  className="p-4 bg-gray-200 border border-gray-200 focus:outline-none focus:bg-white focus:border-gray-500"
                  required=""/>
              </div>

              <div className="date-input">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Start Date"
                    value={startDate}
                    onChange={(newValue) => {
                      setStartDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>


              <div className="date-input">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="End Date"
                    value={endDate}
                    onChange={(newValue) => {
                      setEndDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>

              {_.isEmpty(solanaUrl) &&
                <div className="date-input">
                  <LoadingButton
                    onClick={onButtonClick}
                    loading={loading}
                    disabled={loading}
                    variant="contained"
                    className="px-8 py-2 duration-200 bg-gray-800 text-white cursor-pointer transition-colors hover:bg-gray-400"
                  >
                    Generate Quote
                  </LoadingButton>
                </div>
              }

              {amount > 0 &&
                <div className="date-input">
                  <a href={solanaUrl}>
                    <button type="button" href={solanaUrl} className="px-8 py-2 duration-200 bg-gray-800 text-white cursor-pointer transition-colors hover:bg-gray-400">
                      Pay {amount} SOL
                      <img alt="Pay for Quote with Sol" src="img/sol-pay.png" className="sol-pay" />
                    </button>
                  </a>
                </div>
              }

              {!_.isEmpty(solanaUrl) &&
                <div ref={ref} />
              }
              {/* <div>{solanaUrl}</div> */}
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}
