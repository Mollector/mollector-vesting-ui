import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import BigNumber from 'bignumber.js'
import Home from './pages/home'
import Vesting from './pages/vesting'
import Staking from './pages/staking/Staking'
import AuthRoute from './utils/AuthRoute'

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
      <Route path="/">
        <Route component={Home} />
      </Route>
    <Redirect to="/" />
    </Switch>
  )
}

export default App
