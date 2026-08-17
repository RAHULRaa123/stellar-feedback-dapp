# 🚀 Stellar Trust Network

## 🔗 Live Demo

[Live App](https://stellar-trust-network.vercel.app/)

---

## 🎥 Demo Video

[Watch Demo Video](https://youtu.be/5wjd01jvn_A)

---

## 📌 Description

**Stellar Trust Network** is a decentralized business reputation, verification, and transaction trust platform built on the **Stellar Network**.

The platform combines blockchain-based transparency with business trust features, enabling businesses to establish verified profiles, collect customer reviews, build reputation scores, and support transparent transaction workflows.

The project evolved from an anonymous feedback and reward dApp into a broader **business trust ecosystem** built around Stellar and Soroban smart contracts.

---

## 🎯 Core Focus

Building a decentralized trust infrastructure for businesses using Stellar.

The platform focuses on:

* Business identity and verification
* Customer reviews and reputation
* Transparent blockchain-based transactions
* Escrow workflows
* Business discovery
* Analytics and trust insights
* Rewards and incentives

---

## 🌐 Product Overview

Stellar Trust Network provides a unified platform where businesses can establish their identity, build reputation, interact with customers, and participate in transparent blockchain-powered workflows.

### Core Platform Modules

* 🏢 Business Registration
* 👤 Business Profile Management
* 🔐 Business Verification
* ⭐ Customer Reviews
* 📊 Reputation Score
* 🏅 Trust Badge
* 🏪 Business Directory
* 📈 Analytics Dashboard
* 💎 Reward Center
* 💳 Escrow Payment Workflow
* 🤝 Agent Discovery
* 📜 Transaction History
* 📡 Settlement Reliability
* 💧 Liquidity Forecast

---

## 🔌 Smart Contract Integration

The platform includes Stellar/Soroban smart contract integration for the feedback and reward workflow.

### Contract Operations

* `send_feedback` → Stores feedback on-chain
* `fetch_feedback` → Retrieves blockchain-stored feedback
* `send_feedback_and_reward` → Performs an inter-contract call for rewards

This demonstrates how the frontend interacts with Soroban smart contracts through the Stellar ecosystem.

---

## 🏗️ Architecture

### Technology Stack

* **Frontend:** React
* **Blockchain:** Stellar Testnet
* **Smart Contracts:** Soroban
* **Wallet:** Freighter
* **Deployment:** Vercel
* **CI/CD:** GitHub Actions

### Application Flow

```text
User
  ↓
React UI
  ↓
Freighter Wallet
  ↓
Soroban Smart Contract
  ↓
Stellar Testnet
  ↓
Blockchain Transaction
  ↓
Application UI
```

---

## 🔄 Feedback & Reward Workflow

The original core dApp workflow is integrated into the broader trust platform:

1. User connects a Freighter wallet
2. User submits anonymous feedback
3. Feedback is stored on the Stellar blockchain
4. Feedback can be retrieved from the smart contract
5. The reward workflow can trigger an inter-contract call
6. Transaction results are reflected in the application

---

## 🟢 Platform Features

### Blockchain Foundation

* Wallet Connect / Disconnect
* XLM Balance Display
* XLM Transfer
* Soroban Smart Contract Integration
* On-chain Feedback Storage
* Blockchain Feedback Retrieval
* Inter-contract Calls
* Token Reward Workflow

### Business Trust Platform

* Business Registration
* Business Profile Management
* Customer Reviews
* Reputation Scoring
* Business Verification
* Trust Badges
* Business Directory
* Analytics Dashboard
* Reward Center
* Transaction History
* Escrow Payment Workflow
* Agent Discovery
* Settlement Reliability
* Liquidity Forecast

### User Experience

* Loading States
* Error Handling
* Responsive UI
* Mobile-friendly experience
* Optimized contract interaction flow

---

## 👥 Testnet Validation

The feedback workflow was tested using multiple Stellar Testnet wallets.

### Validated Testnet Users

1. `GCTTFOWRDZ6NSNKIHLPJYTDW3I2PLY25HPG5KBSG7F4IXLIXA7QD5TEP`
2. `GCLACDLBPPYGIPAAGXGMMLUQTOFS2XVEOR763NUBYMYIC2RRAOPRADNJ`
3. `GCFL72LTYYVA7HTEC2NYT3AKHYS5CUG5LG26Z5LB667QRDAOFDILH6E7`
4. `GAD4RU2SEIQWXKKYYCPTAOT66BVWHJGIS2GI2CMMX327BYFDYZUBOXIM`
5. `GALGHBSNXLWND3FI2QKHEMVYVOCMVGJMDR6GTOWPYXMOCXRKRO5TYK53`

### Testing Flow

Each test user:

* Connected a wallet
* Submitted feedback
* Verified the blockchain transaction
* Retrieved feedback from the smart contract

---

## 📊 User Feedback

User testing was used to identify usability improvements.

### Feedback Data

[View User Feedback Data](https://docs.google.com/spreadsheets/d/1CEDVG9Mgv230Es2UmEXVUyZG3aYXmaSbkp8ATkloMp8/edit?usp=sharing)

### Key Observations

* Feedback submission worked correctly
* Users found the application easy to use
* Minor UI/UX improvements were identified

### Improvements Implemented

Based on testing feedback:

* Added clearer loading states
* Improved responsive behavior
* Enhanced the overall user experience

---

## 🧠 Smart Contracts

### Feedback Contract

```text
CBXTSVTRCTXSJYYTGGV6G5R3F4EI73B3QW3SZ2MAZXMFEW445VQW7MOJ
```

### Token Contract

```text
CCUNRZQPLTIPELMXVCIMDLZP3B4RLXJCGB3NPWHDUNFJNVATKAGIRPAJ
```

### Caller Contract

```text
CCRR3NARGJ6UYRKW7N42KVN6KL6VXEHXA7AHYMB7URS7T7FIE35XCLJC
```

---

## 🔗 Transaction Proof

A Stellar Testnet transaction demonstrating the smart contract workflow:

[View Transaction on Stellar Expert](https://stellar.expert/explorer/testnet/tx/f498be49a48fd79f2fe7f4ff6a53ec09df5f911ed631ae34f2e18bde448c480c)

---

## 📸 Screenshots

### Smart Contract Interaction

![Inter Contract](./inter-contract-success.png)

Successful interaction between the application and Soroban smart contracts.

### Feedback Retrieval

![Fetch Feedback](./fetch-feedback.png)

Retrieval of blockchain-stored feedback.

### Mobile Responsive View

![Mobile View](./mobile-view.png)

Responsive application experience on mobile devices.

---

## 🧪 Testing

The project includes automated tests covering core feedback functionality.

### Tested Areas

* Feedback submission
* Empty feedback validation
* Feedback count
* Smart contract interaction

All documented tests are passing.

![Tests](./test-output.png)

---

## ⚙️ CI/CD

GitHub Actions is integrated into the project for automated build and test workflows.

### Pipeline

```text
Code Push
   ↓
GitHub Actions
   ↓
Build
   ↓
Tests
   ↓
Deployment Workflow
```

[View GitHub Actions](https://github.com/RAHULRaa123/stellar-trust-network/actions)

---

## 🚀 Roadmap

### Phase 1 — Stellar Business Trust

* Mainnet deployment
* Business verification on Stellar
* Merchant onboarding

### Phase 2 — Decentralized Reputation

* NFT-based Trust Badges
* Decentralized reputation protocol
* Multi-business management dashboard

### Phase 3 — Advanced Infrastructure

* AI-powered fraud detection
* Cross-border merchant payments
* Public API for business verification
* Mobile application for Android and iOS

### Long-Term Vision

Build a decentralized trust layer for businesses on Stellar where merchants, customers, and payment providers can interact through **verifiable reputation, transparent transactions, and blockchain-based trust infrastructure**.

---

## 📚 Project Documentation

Additional project documentation is available in the repository:

* [Product Update](./PRODUCT_UPDATE.md)
* [User Feedback Report](./USER_FEEDBACK_REPORT.md)
* [Growth & Traction Report](./GROWTH_REPORT.md)

---

## 👨‍💻 Author

**Rahul Saini**

---

## ⭐ Project

**Stellar Trust Network**

A decentralized trust infrastructure for businesses built on the Stellar Network.
