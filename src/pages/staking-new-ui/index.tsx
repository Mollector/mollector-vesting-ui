import React from 'react'
import { Layout } from '../../layout'
import { StakeBox } from '../../modules/stake-box'
import { StakeItem } from '../../modules/stake-item'

const StakingNewUI = () => {
  return (
    <Layout>
      <StakeBox/>
      <StakeItem/>
    </Layout>
  )
}

export default StakingNewUI
