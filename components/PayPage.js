import _ from 'lodash';
import React from 'react';
import Collapse from '@mui/material/Collapse';
import { encodeURL, createQR } from '@solana/pay';
import { PublicKey } from '@solana/web3.js';
import BigNumber from 'bignumber.js';
import { LoadingButton } from '@mui/lab';

export function PayPage({ isOpen, checkout }) {
  const ref = React.useRef(null);
  const [loading, setLoading] = React.useState(false);
  let solanaUrl, qrCode, amount;

  if (!_.isEmpty(checkout)) {
    const json = JSON.parse(checkout);
    amount = json.amount;
    const solanaCheckout = {...json,
      recipient: new PublicKey(json.recipient),
      amount: new BigNumber(json.amount),
      reference: new PublicKey(json.reference), // this is the transaction signature!
    };
    solanaUrl = encodeURL(solanaCheckout);
    qrCode = createQR(solanaUrl, 200);
    qrCode.append(ref.current);
  }

  function onButtonClick() {

  }

  return <Collapse in={isOpen && !_.isEmpty(checkout)}>
    <p>Your stake account looks good!</p>
    {/* <div>You have a couple payment options:</div> */}

    <div>Use Solana Pay:</div>
    <div className="date-input">
      <a href={solanaUrl}>
      <LoadingButton
        onClick={onButtonClick}
        loading={loading}
        disabled={loading}
        variant="contained"
        className="px-8 py-2 duration-200 bg-gray-800 text-white cursor-pointer transition-colors hover:bg-gray-400">
          Pay {amount} SOL
          <img alt="Pay for Quote with Sol" src="img/sol-pay.png" className="sol-pay" />
      </LoadingButton>
      </a>
    </div>

    {/* // TODO: This renders too many times */}
    {!_.isEmpty(solanaUrl) &&
      <div ref={ref} />
    }

    <p>Pay manually and enter your transaction ID here:</p>
    <div>TODO: text box and button to submit</div>
    <div>download button?</div>
  </Collapse>;
}
