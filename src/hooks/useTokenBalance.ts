import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { useBep20TokenContract } from '../web3/contract'
import { useWeb3Provider } from '../web3/web3'
import { getBalanceNumber } from '../utils/formatBalance'

const useTokenBalance = (tokenAddress: string) => {
  const provider = useWeb3Provider()
  const { account } = useWeb3React()
  const stakeToken1Contract = useBep20TokenContract(provider, tokenAddress)
  const [balance, setBalance] = useState(0)
  const [countRefresh, setCountRefresh] = useState(0)
  async function getBalance() {
    try {
      const data = await stakeToken1Contract.methods.balanceOf(account).call()
      const n_bal = getBalanceNumber(new BigNumber(data), 18)
      setBalance(n_bal)
    } catch (error) {
      console.log('fail fetch token balance')
    }
  }
  useEffect(() => {
    if (provider && account) {
      getBalance()
    }
  }, [account, stakeToken1Contract, countRefresh, provider])

  const reFetchingBalance = () => {
    setCountRefresh(countRefresh + 1)
  }

  return [balance, reFetchingBalance]
}
export default useTokenBalance
