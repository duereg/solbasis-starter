import _ from 'lodash';
import React from 'react';
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { ErrorLabel } from '@components/ErrorLabel';
import { DateSelector } from '@components/DateSelector';
import { PayPage } from '@components/PayPage';
import Script from 'next/script';

import Collapse from '@mui/material/Collapse';
import { LoadingButton } from '@mui/lab';

import axios from 'axios';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function GenerateReport() {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [stakeAddress, setStakeAddress] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [isErrorOpen, setErrorOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isCool, setIsCool] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(true);
  const [checkout, setCheckout] = React.useState({});

  function resetScreen() {
    setErrorMessage('');
    setErrorOpen(false);
  }

  function onButtonClick() {
    if (_.isEmpty(stakeAddress)) {
      setErrorMessage('You must provide a valid stake address to continue');
      setErrorOpen(true);
      return;
    }

    if (!_.isDate(startDate)) {
      setErrorMessage('You must provide a valid start date to continue');
      setErrorOpen(true);
      return;
    }

    if (!_.isDate(endDate)) {
      setErrorMessage('You must provide a valid end date to continue');
      setErrorOpen(true);
      return;
    }

    setLoading(true);
    const url = `https://akyeck1ms6.execute-api.us-east-1.amazonaws.com/generateQuote?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&stakeAddress=${stakeAddress}&reportType=json&isCool=${isCool}`;

    console.log('about to call', url);
    axios.get(url)
      .then(results => {
        setCheckout(JSON.stringify(results.data));
        setIsOpen(false);
      }).catch(ex => {
        const errorMessage = _.get(ex, 'response.data.message');

        if (!_.isEmpty(errorMessage)) {
          setErrorMessage(`Request Failed: ${errorMessage}`);
        } else {
          setErrorMessage("There is a problem on our end. The support team has been notified. I would try again.")
        }

        setErrorOpen(true);
      }).finally(() => {
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
            <Collapse in={isOpen}>
              <p>To generate a stake report, please fill out the form below.</p>
              <ErrorLabel isOpen={isErrorOpen} onClose={resetScreen} message={errorMessage} />
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

              <DateSelector label={"Start Date"} value={startDate} onChange={resetScreen} setValue={setStartDate} />
              <DateSelector label={"End Date"} value={endDate} onChange={resetScreen} setValue={setEndDate} />

              <div className="date-input">
                <FormGroup>
                  <FormControlLabel control={<Switch onChange={(event) => {
                    resetScreen();
                    setIsCool(event.target.checked)
                  }}/>} label="I'm cool and stake with SolCapture (we'll check this)" />
                </FormGroup>
              </div>
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

            </Collapse>
            <PayPage isOpen={!isOpen} checkout={checkout} />
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}
