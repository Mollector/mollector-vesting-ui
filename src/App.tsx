import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import { Layout } from './layout'
import Home from './pages/home'
import Vesting from './pages/vesting'
import Staking from './pages/staking'
import AuthRoute from './utils/AuthRoute'
import StakingNewUI from './pages/staking-new-ui'

// Config for big number
BigNumber.set({
  EXPONENTIAL_AT: 25,
})

function App() {
  return (
    <Switch>
      <Route path="/vesting/:address">
        <AuthRoute component={Vesting} />
      </Route>
      <Route path="/staking">
        <AuthRoute component={Staking} />
      </Route>
      <Route path="/staking-new-ui">
        <AuthRoute component={StakingNewUI} />
      </Route>
      <Route path="/">
        <Route component={Home} />
      </Route>
    <Redirect to="/" />
    </Switch>
  )
}

export default App
