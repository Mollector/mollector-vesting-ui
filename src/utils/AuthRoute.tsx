import React, { FC, ReactNode } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Route, Navigate } from 'react-router-dom'

type AuthRouteProps = {
  component: ReactNode
}

const AuthRoute :FC<AuthRouteProps> = ({ component: Component, ...rest }) => {
  const { account } = useWeb3React()

  if (!account) {
    return <Navigate to="/" />
  }
  
  // @ts-ignore
  return <Route render={(props) => <Component {...props} />} {...rest} />
}

export default AuthRoute
