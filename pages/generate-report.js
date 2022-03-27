import _ from 'lodash';
import React from 'react';
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Script from 'next/script';

import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

import TextField from '@mui/material/TextField';
import { LoadingButton } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import axios from 'axios';
import { encodeURL, createQR } from '@solana/pay';
import { PublicKey } from '@solana/web3.js';
import BigNumber from 'bignumber.js';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function GenerateReport() {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [stakeAddress, setStakeAddress] = React.useState('');
  const [solanaUrl, setSolanaUrl] = React.useState('');
  const [amount, setAmount] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [isErrorOpen, setErrorOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isCool, setIsCool] = React.useState(false);
  const ref = React.useRef(null);

  function resetScreen() {
    setErrorMessage('');
    setErrorOpen(false);
    setAmount(0);
    setSolanaUrl('');
  }

  function onButtonClick() {
    setLoading(true);
    const url = `https://akyeck1ms6.execute-api.us-east-1.amazonaws.com/generateQuote?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&stakeAddress=${stakeAddress}&reportType=json&isCool=${isCool}`;

    console.log('about to call', url);
    axios.get(url)
      .then(results => {
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
      }).catch(ex => {
        const errorMessage = _.get(ex, 'response.data.message');

        if (!_.isEmpty(errorMessage)) {
          setErrorMessage(`Request Failed: ${errorMessage}`);
        } else {
          setErrorMessage("There is a problem on our end. The support team has been notified.")
        }

        setErrorOpen(true);
      }).finally(() => {
        // TODO: PRINT ERROR MESSAGE
        setLoading(false);
      });
  }

  return (
    <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      <Head>
        <title>SolCapture - Generate Report</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Script src="js/navigation.js" type="text/javascript"></Script>

      <Header />
      <div className="scroll-top rounded-full">
        <span className="icon-keyboard_arrow_up text-2xl"></span>
      </div>
      <div className="mx-auto my-10 max-w-6xl">
        <div className="mx-3 col-span-3 lg:col-span-2 px-2">
          <h1 className="title text-5xl mb-4">Generate Report</h1>
          <div className="content py-1">
              <p>To generate a stake report, please fill out the form below.</p>
              <Collapse in={isErrorOpen}>
                <Alert
                  variant="outlined"
                  severity="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        resetScreen();
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  {errorMessage}
                </Alert>
              </Collapse>
              <div className="input">
                <input
                  type="text"
                  onChange={(event) => {
                    resetScreen();
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
                      resetScreen();
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
                      resetScreen();
                      setEndDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>


              {/* TODO: record isCool form this switch  */}
              <div className="date-input">
                <FormGroup>
                  <FormControlLabel control={<Switch onChange={(event) => {
                    resetScreen();
                    setIsCool(event.target.checked)
                  }}/>} label="I'm cool and stake with SolCapture (we'll check this)" />
                </FormGroup>
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
