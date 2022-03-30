import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import { Layout } from './layout'
import Home from './pages/home'
import Vesting from './pages/vesting'
import Staking from './pages/staking'
import Airdrop from './pages/airdrop'
import AuthRoute from './utils/AuthRoute'

// Config for big number
BigNumber.set({
  EXPONENTIAL_AT: 25,
})

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vesting/:address">
        <AuthRoute
          component={
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
      </Route>

      <Route
        path="/staking"
        element={
          <Layout
            title="MaxBet | PigFarmTeam"
            description="The Decentralized House to Revolutionize Gamble Industry."
            mode="transparent"
            fixedHeader={true}
            withDecoration={true}
            web3={true}
          >
            <Staking />
          </Layout>
        }
      />
    </Routes>
  )
}

export default App
