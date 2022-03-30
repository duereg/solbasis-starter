import axios from 'axios';
import { waitFor } from 'poll-until-promise';

// {checkout, transaction}
export default function retrieveReport(parameters) {
  if(!parameters) {
    throw new Error('no params mf');
  }
  // TODO: need to reformat parameters for this to work


  const data = JSON.stringify(parameters);

  const config = {
    method: 'post',
    url: 'https://akyeck1ms6.execute-api.us-east-1.amazonaws.com/stakeReward',
    headers: { 'Content-Type': 'application/json' },
    data,
  };

  return waitFor(async () => {
      try {
        const response = await axios(config);

        console.log('response', response);
        const { status, data } = response;
        // Retry the request on http status code 202
        if (status === 200 ) {
          return Promise.resolve(data);
        }
        return false;
      } catch(ex) {
        console.error('some shit be going down', ex);
        return false;
      }
    }, { timeout: 60_000, interval: 500, verbose: true });
}
