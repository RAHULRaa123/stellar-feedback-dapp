import { signTransaction, setAllowed, getAddress } from '@stellar/freighter-api';
import * as StellarSdk from '@stellar/stellar-sdk';

const server = new StellarSdk.Horizon.Server('https://horizon-testnet.stellar.org');

// ✅ Detect mobile
const isMobile = () => /Android|iPhone/i.test(navigator.userAgent);

// ✅ Wallet connect (mobile + desktop)
const checkConnection = async () => {
  if (isMobile()) {
    // 👉 Mobile pe Freighter deep link open hoga
    window.location.href = "https://freighter.app/ul/";
    return false;
  } else {
    return await setAllowed();
  }
};

// ✅ Get public key
const retrievePublicKey = async () => {
  if (isMobile()) {
    alert("⚠️ Mobile me Freighter open karo phir connect karo");
    return null;
  }

  const { address } = await getAddress();
  return address;
};

// ✅ Balance
const getBalance = async () => {
  await setAllowed();

  const { address } = await getAddress();
  const account = await server.loadAccount(address);

  const nativeBalance = account.balances.find(
    (bal) => bal.asset_type === 'native'
  );

  return nativeBalance ? nativeBalance.balance : '0';
};

// ✅ Sign transaction
const userSignTransaction = async (xdr, signWith) => {
  return await signTransaction(xdr, {
    networkPassphrase: StellarSdk.Networks.TESTNET,
    accountToSign: signWith,
  });
};

export {
  checkConnection,
  retrievePublicKey,
  getBalance,
  userSignTransaction,
};