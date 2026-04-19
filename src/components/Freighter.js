import { isConnected, requestAccess } from '@stellar/freighter-api';

export const connectWallet = async () => {
  try {
    // Desktop (Freighter extension)
    if (window.freighter) {
      const access = await requestAccess();
      return access.address;
    } 
    
    // 📱 Mobile fallback
    else {
      alert("Open this app inside Freighter mobile browser");
      
      // redirect user to open in wallet
      window.location.href = "https://freighter.app/";
    }
  } catch (err) {
    console.error(err);
  }
};