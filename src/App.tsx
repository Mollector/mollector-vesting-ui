import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Home } from "./pages/home";
import { Vesting } from "./pages/vesting";
import { Airdrop } from "./pages/airdrop";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            title="MaxBet | PigFarmTeam"
            description="The Decentralized House, Revolutionize Gamble Industry."
          >
            <Home />
          </Layout>
        }
      />
      <Route
        path="vesting"
        element={
          <Layout
            title="MaxBet | PigFarmTeam"
            description="The Decentralized House to Revolutionize Gamble Industry."
            mode="transparent"
            fixedHeader={true}
            withDecoration={true}
            web3={true}
          >
            <Vesting />
          </Layout>
        }
      />
      <Route
        path="airdrop"
        element={
          <Layout
            title="MaxBet | PigFarmTeam"
            description="The Decentralized House to Revolutionize Gamble Industry."
            mode="transparent"
            fixedHeader={true}
            withDecoration={true}
            web3={true}
          >
            <Airdrop />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
