import './App.css';
import { useState, createContext } from 'react';
import Header from './components/Header';
import SendFeedback from './components/SendFeedback';
import FetchFeedback from './components/FetchFeedback';
import BusinessHome from './components/BusinessHome';
import BusinessRegistration from './components/BusinessRegistration';
import BusinessDashboard from './components/BusinessDashboard';
import BusinessProfile from './components/BusinessProfile';
import CustomerReview from "./components/CustomerReview";
import RewardCenter from "./components/RewardCenter";
import TransactionHistory from "./components/TransactionHistory";
import ReputationScore from "./components/ReputationScore";
import BusinessVerification from "./components/BusinessVerification";
import EscrowPayment from "./components/EscrowPayment";
import AgentDiscovery from "./components/AgentDiscovery";
import SettlementReliability from "./components/SettlementReliability";
export const pubKeyData = createContext();

function App() {
  const [pubKey, setPubKey] = useState("");

  return (
    <div className="App">

      <Header setPubKey={setPubKey} />

      <BusinessHome />

      <BusinessRegistration />

      <BusinessDashboard />

      <RewardCenter />

      <TransactionHistory />

      <BusinessProfile />

      <CustomerReview />

      <ReputationScore />

      <BusinessVerification />

      <EscrowPayment />

      <AgentDiscovery />

      <SettlementReliability />


      <p>
        {pubKey ? "Connected: " + pubKey : "Not Connected"}
      </p>

      <pubKeyData.Provider value={pubKey}>
        <SendFeedback />
        <FetchFeedback />
      </pubKeyData.Provider>

    </div>
  );
}

export default App;