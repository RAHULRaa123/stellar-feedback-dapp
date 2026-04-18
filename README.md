# 🚀 Stellar Connect Wallet Mini dApp

## 🔗 Live Demo  
https://stellar-connect-wallet-l4vw.vercel.app  

---

## 📌 Description  
This is a complete **end-to-end Stellar Mini dApp** built on the **Stellar Testnet** using Freighter Wallet.  

The application allows users to:
- Connect their wallet  
- Send XLM transactions  
- Interact with a deployed smart contract  
- Store and fetch anonymous feedback on-chain  

This project demonstrates full-stack Web3 development including frontend, smart contract, testing, and deployment.

---

## 🟢 Features  

### Level 1
- Connect Freighter Wallet  
- Disconnect Wallet  
- Display XLM Balance  
- Send XLM  
- Transaction Status  

### Level 2
- Smart Contract Integration  
- Send Feedback to Blockchain  
- Fetch Feedback from Blockchain  
- Transaction Tracking  

### Level 3
- Loading states (UI feedback)  
- Error handling  
- Fully deployed app (Vercel)  
- Clean UI  

### 🟢 Level 4 (Advanced Features)
- Inter-contract call (Caller → Feedback Contract)  
- On-chain data interaction between contracts  
- Production-ready deployment  
- Improved contract architecture  

---

## 🧠 Smart Contracts  

### Main Feedback Contract  
**Contract Address:**  
CBXTSVTRCTXSJYYTGGV6G5R3F4EI73B3QW3SZ2MAZXMFEW445VQW7MOJ  

**Functions**
- `send_feedback`  
- `fetch_feedback`  

---

### Caller Contract (Inter-Contract)  
**Contract Address:**  
CCBBSW5CDBODQJIANEZE7T56OP6PSCGDRSRUJXO6DYDV27KRF3OQAULE  

**Function**
- `call_hello` → calls `send_feedback` in main contract  

---

## 🔗 Level 4 - Inter-Contract Call Proof  

### Transaction Hash  
3f98cddda6720672d1472f6a1a9934a9601a55fc000184fcd1dd6b8c4f51b121  

🔗 Explorer:  
https://stellar.expert/explorer/testnet/tx/3f98cddda6720672d1472f6a1a9934a9601a55fc000184fcd1dd6b8c4f51b121  

---

## ✅ Result  

Successfully executed inter-contract call:

```bash
"Hello from caller"