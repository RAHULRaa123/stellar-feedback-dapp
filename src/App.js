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
export const pubKeyData = createContext();

function App() {
  const [pubKey, setPubKey] = useState("");

  return (
    <div className="App">

      <Header setPubKey={setPubKey} />

      <BusinessHome />

      <BusinessRegistration />

      <BusinessDashboard />

      <BusinessProfile />
      <CustomerReview />

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