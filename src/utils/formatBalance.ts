import BigNumber from 'bignumber.js'
import { BIG_TEN } from './bignumber'

BigNumber.set({
  EXPONENTIAL_AT: 25,
})

/**
 * Take a formatted amount, e.g. 15 BNB and convert it to full decimal value, e.g. 15000000000000000
 */
 export const getDecimalAmount = (amount: number, decimals = 18) => {
  return new BigNumber(amount).times(BIG_TEN.pow(decimals))
}

export const getBalanceAmount = (amount: BigNumber, decimals = 18) => {
  return new BigNumber(amount).dividedBy(BIG_TEN.pow(decimals))
}

/**
 * This function is not really necessary but is used throughout the site.
 */
 export const getBalanceNumber = (balance: BigNumber, decimals = 18) => {
  return getBalanceAmount(balance, decimals).toNumber()
}

export const getFullDisplayBalance = (balance: BigNumber, decimals = 18, decimalsToAppear: number = 2) => {
  if (balance) {
    return new BigNumber(getBalanceAmount(balance, decimals).toFixed(decimalsToAppear)).toString()
  }

  return null
}

export const getAmountString = (amount: BigNumber, decimals = 3) => {
  return amount.toFixed(decimals)
}
