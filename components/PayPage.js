import _ from 'lodash';
import React from 'react';
import Collapse from '@mui/material/Collapse';

export function PayPage({ isOpen, amount, solanaUrl, ref }) {
  return <Collapse in={isOpen}>
    <p>Your stake account looks good!</p>
    <div>You have a couple payment options:</div>

    <div>Use Solana Pay:</div>
    {amount > 0 &&
      <div className="date-input">
        <a href={solanaUrl}>
          <button type="button" href={solanaUrl} className="px-8 py-2 duration-200 bg-gray-800 text-white cursor-pointer transition-colors hover:bg-gray-400">
            Pay {amount} SOL
            <img alt="Pay for Quote with Sol" src="img/sol-pay.png" className="sol-pay" />
          </button>
        </a>
      </div>}

    {!_.isEmpty(solanaUrl) &&
      <div ref={ref} />}

    <p>Pay manually and enter your transaction ID here:</p>
    <div>TODO: text box and button to submit</div>

    <div>download button?</div>
  </Collapse>;
}
