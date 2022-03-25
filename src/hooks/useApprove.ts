import { useCallback } from 'react'
import { ethers } from 'ethers'
import { Contract } from 'web3-eth-contract'
import { useWeb3React } from '@web3-react/core'

const useApprove = (tokenContract: Contract, spenderAddress: string) => {
  const { account } = useWeb3React()

  const handleApprove = useCallback(async () => {
    try {
      const tx = await tokenContract.methods.approve(spenderAddress, ethers.constants.MaxUint256).send({
        from: account,
      })
      return tx
    } catch (e) {
      return false
    }
  }, [account, tokenContract, spenderAddress])

  return { onApprove: handleApprove }
}

export default useApprove