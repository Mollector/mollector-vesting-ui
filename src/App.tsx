import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import { Layout } from './layout'
import Home from './pages/home'
import Vesting from './pages/vesting'
import Staking from './pages/staking'
import Airdrop from './pages/airdrop'

// Config for big number
BigNumber.set({
  EXPONENTIAL_AT: 25,
})

function App() {
  delete localStorage.walletconnect
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout title="Mollector" description="Explore and conquer the Mollector World">
            <Home />
          </Layout>
        }
      />
      <Route
        path="/vesting/:address"
        element={
          <Layout
            title="Mollector"
            description="Explore and conquer the Mollector World"
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
        path="/staking"
        element={
          <Layout
            title="Mollector"
            description="Explore and conquer the Mollector World"
            mode="transparent"
            fixedHeader={true}
            withDecoration={true}
            web3={true}
          >
            <Staking />
          </Layout>
        }
      />
      {/* <Route
        path="airdrop"
        element={
          <Layout
            title="Mollector"
            description="Explore and conquer the Mollector World"
            mode="transparent"
            fixedHeader={true}
            withDecoration={true}
            web3={true}
          >
            <Airdrop />
          </Layout>
        }
      /> */}
    </Routes>
  )
}

export default App
