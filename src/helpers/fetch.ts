import { delay } from './delay';

async function fetchData(
  url: string,
  body: any = null,
  method: string = 'GET'
): Promise<any> {
  const toJSON = body ? JSON.stringify(body) : undefined;
  const options = {
    method,
    headers: new Headers({
      // Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    }),
    body: toJSON,
  };
  let response;

  try {
    response = await fetch(url, options);

    if (response.status === 409) {
      throw new Error('Conflit');
    } else if (!response.ok) {
      throw new Error("Can't retrieve data.");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Lost connection. ${error}`);
  }
}

async function fetchRetry(
  url: string,
  body: any = null,
  method: string = 'GET'
): Promise<any> {
  const maxAttempts = 3;
  const delayTimes = [1000, 1500, 3000];
  let attempts = 0;
  let data;
  let retryAfter;

  while (attempts < maxAttempts) {
    try {
      data = await fetchData(url, body, method);
      return data;
    } catch (error) {
      attempts += 1;
      if (attempts === maxAttempts) {
        throw new Error('Connection to Server Failed.');
      }

      retryAfter = delayTimes[attempts - 1];

      await delay(retryAfter);
    }
  }
}

// -------------------------------------------------------
// use example:
// const apiCall = async () => {
//   const data = await fetchRetry(URL);
//   console.log('>>', data);
// };
// apiCall();

export { fetchData, fetchRetry };
