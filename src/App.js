import "./App.css";
import { useState, createContext } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import SendFeedback from "./components/SendFeedback";
import FetchFeedback from "./components/FetchFeedback";

import BusinessHome from "./components/BusinessHome";
import BusinessRegistration from "./components/BusinessRegistration";
import BusinessDashboard from "./components/BusinessDashboard";
import BusinessProfile from "./components/BusinessProfile";
import CustomerReview from "./components/CustomerReview";
import RewardCenter from "./components/RewardCenter";
import TransactionHistory from "./components/TransactionHistory";
import ReputationScore from "./components/ReputationScore";
import BusinessVerification from "./components/BusinessVerification";
import EscrowPayment from "./components/EscrowPayment";
import AgentDiscovery from "./components/AgentDiscovery";
import SettlementReliability from "./components/SettlementReliability";
import LiquidityForecast from "./components/LiquidityForecast";
import BusinessDirectory from "./components/BusinessDirectory";

export const pubKeyData = createContext();

function App() {
  const [pubKey, setPubKey] = useState("");
  const [page, setPage] = useState("Home");

  return (
    <div style={{ display: "flex" }}>
      <Sidebar setPage={setPage} />

      <div style={{ flex: 1 }}>
        <Header setPubKey={setPubKey} />

        {page === "Home" && <BusinessHome />}

        {page === "Registration" && <BusinessRegistration />}

        {page === "Profile" && <BusinessProfile />}

        {page === "Reviews" && <CustomerReview />}

        {page === "Dashboard" && <BusinessDashboard />}

        {page === "Rewards" && <RewardCenter />}

        {page === "Transactions" && <TransactionHistory />}

        {page === "Reputation" && <ReputationScore />}

        {page === "Verification" && <BusinessVerification />}

        {page === "Escrow" && <EscrowPayment />}

        {page === "Agents" && <AgentDiscovery />}

        {page === "Settlement" && <SettlementReliability />}

        {page === "Forecast" && <LiquidityForecast />}

        {page === "Business Directory" && <BusinessDirectory />}

        <p>
          {pubKey ? "Connected: " + pubKey : "Not Connected"}
        </p>

        <pubKeyData.Provider value={pubKey}>
          <SendFeedback />
          <FetchFeedback />
        </pubKeyData.Provider>
      </div>
    </div>
  );
}

export default App;