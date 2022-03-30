import _ from 'lodash';
import React from 'react';
import { encodeURL, createQR } from '@solana/pay';
import { PublicKey } from '@solana/web3.js';
import BigNumber from 'bignumber.js';
import { LoadingButton } from '@mui/lab';
import getTransaction from './transaction';
import retrieveReport from './report';

import { UpdateLabel } from '@components/UpdateLabel';

export function PayPage({checkout}) {
  const ref = React.useRef(null);
  const [loading, setLoading] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [paymentStatus, setPaymentStatus] = React.useState('');
  const [severity, setSeverity] = React.useState('info');

  let solanaUrl, qrCode, amount, solanaCheckout;

  // if the string is set
  if (!_.isEmpty(checkout)) {
    try {
      const json = JSON.parse(checkout);
      // if the object is not empty
      if (!_.isEmpty(json)) {
        amount = json.amount;
        solanaCheckout = {...json,
          recipient: new PublicKey(json.recipient),
          amount: new BigNumber(json.amount),
          reference: new PublicKey(json.reference), // this is the transaction signature!
        };
        solanaUrl = encodeURL(solanaCheckout);
        qrCode = createQR(solanaUrl, 200);
        qrCode.append(ref.current);
      }
    }
    catch(ex) {
      console.error(ex);
    }
  }

  async function onButtonClick() {
    if (!_.isEmpty(solanaCheckout)) {
      let keepGoing = true;

      try {
        console.log('solanaCheckout', solanaCheckout);
        setLoading(true);
        setVisible(true);
        setSeverity('info');

        console.log('onButtonClick');

        // Update payment status
        setPaymentStatus("We're looking up your transaction. This can take a couple of seconds.")

        /**
         * Wait for payment to be confirmed
         *
         * When a customer approves the payment request in their wallet, this transaction exists on-chain.
         * You can use any references encoded into the payment link to find the exact transaction on-chain.
         * Important to note that we can only find the transaction when it's **confirmed**
         */
        console.log('\n5. Find the transaction');

        const transaction = await getTransaction(solanaCheckout.reference);
        console.log('transaction', transaction);
      } catch (ex) {
        console.error('whoops on tranny', ex);
        setLoading(false);
        setPaymentStatus("Transaction could not be found. Did you pay yet?");
        setSeverity('error');
        keepGoing = false;
      }

      if (keepGoing) {
        try {
          setPaymentStatus("Transaction Confirmed! We're going to generate your report now. This can take several MINUTES.");
          // TODO: need to make sure this page gets the correct parameters to make this request
          const report = await retrieveReport({
            ...checkout,
            transactionId: transaction.signature
          });

          setPaymentStatus(JSON.stringify(report));

          // TODO: prompt user to download
          // https://github.com/eligrey/FileSaver.js ???
        } catch(ex) {
          console.error('whoops on payey', ex);
          setLoading(false);
          setPaymentStatus("Problem generating your report. Please copy the page URL and email support@solcapture.com with it.");
          setSeverity('error');

        }
      }

    } else {
      console.warn('something is not quite right with the page load.')
    }
  }

  return <div>
    <UpdateLabel isOpen={visible} onClose={() => {setVisible(false); }} message={paymentStatus} severity={severity}  />
    <p>Your stake account looks good!</p>
    {/* <div>You have a couple payment options:</div> */}

    {/* <div>Use Solana Pay:</div> */}
    <div className="date-input">
      <a href={solanaUrl}>
        <LoadingButton
          onClick={onButtonClick}
          loading={loading}
          disabled={loading}
          variant="contained"
          className="px-8 py-2 duration-200 bg-gray-800 text-white cursor-pointer transition-colors hover:bg-gray-400 block">
            <div>Pay {amount} SOL</div>
            <div><img alt="Pay for Quote with Sol" src="img/sol-pay.png" className="sol-pay" /></div>
        </LoadingButton>
      </a>
    </div>

    {/* // TODO: This renders too many times */}
    {/* {!_.isEmpty(solanaUrl) &&
      <div ref={ref} />
    } */}
{/*
    <p>Pay manually and enter your transaction ID here:</p>
    <div>TODO: text box and button to submit</div>
    <div>download button?</div> */}
  </div>;
}
