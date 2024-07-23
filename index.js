import {loadConnectAndInitialize} from '@stripe/connect-js';

const fetchClientSecret = async () => {
  // Fetch the AccountSession client secret
  const response = await fetch('/account_session', { method: "POST" });
  if (!response.ok) {
    // Handle errors on the client side here
    const {error} = await response.json();
    console.error('An error occurred: ', error);
    document.querySelector('#error').removeAttribute('hidden');
    return undefined;
  } else {
    const {client_secret: clientSecret} = await response.json();
    document.querySelector('#error').setAttribute('hidden', '');
    return clientSecret;
  }
}

const stripeConnectInstance = loadConnectAndInitialize({
    // This is your test publishable API key.
    publishableKey: "pk_test_51N8QO3JE2alzfsnTGoPaXCrU5bxZTAEnToWFxlbskfFSjnuyuwl3LZGMzud6N0VjV0YGiURL1d0IOfDGzcPybciH00hbtyKzhx",
    fetchClientSecret: fetchClientSecret,
  });
const paymentComponent = stripeConnectInstance.create("payments");
const container = document.getElementById("container");
container.appendChild(paymentComponent);
