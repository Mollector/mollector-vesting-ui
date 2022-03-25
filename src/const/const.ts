import { CHAINID_MAPPING, TOKEN_MAPPING } from './types'
export const GITHUB_PATH = 'https://github.com/pigfarmteam/pigfarmteam.github.io'
export const TELEGRAM_PATH = 'https://t.me/pigfarm'
export const TWITTER_PATH = 'https://twitter.com/PigFarmTeam'
export const TOKENS_PATH = '/tokens'
export const AIRDROP_PATH = '/airdrop'

export const SOCIAL = {
  // Github: GITHUB_PATH,
  // Twitter: TWITTER_PATH,
  // Telegram: TELEGRAM_PATH,
}

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const DEFAULT_AUCTION_INDEX = 0

export const PROVIDER_POLLING_INTERVAL = 12000

// token: 0x273Bd60699F9aeD99a3a81795BCE3FEE29f963E4
export const VESTING_CONTRACT_ADDRESS: CHAINID_MAPPING = {
  56: '0x0000000000000000000000000000000000000000',
  88: '0x0000000000000000000000000000000000000000',
  89: '0x16A7f7EbF0F8C61e84ABcbf72F3113df231f2bCa',
}

export const STAKING_CONTRACT_ADDRESS: CHAINID_MAPPING = {
  56: '0x0000000000000000000000000000000000000000',
  88: '0x0000000000000000000000000000000000000000',
  89: '0x0B1a80437d6F39f1B6EC9997407A4302D2889258',
}

export const TOKEN1_STAKE: TOKEN_MAPPING = {
  56: {
    ADDRESS: '0x0000000000000000000000000000000000000000',
    SYMBOL: '',
    NAME: '',
  },
  88: {
    ADDRESS: '0x0000000000000000000000000000000000000000',
    SYMBOL: '',
    NAME: '',
  },
  89: {
    ADDRESS: '0x7Df9AfB35C00a9A57c7BCfBc771e9dD97822e2c7',
    SYMBOL: 'CBT',
    NAME: 'CBT',
  },
}

export const TOKEN2_STAKE: TOKEN_MAPPING = {
  56: {
    ADDRESS: '0x0000000000000000000000000000000000000000',
    SYMBOL: '',
    NAME: '',
  },
  88: {
    ADDRESS: '0x0000000000000000000000000000000000000000',
    SYMBOL: '',
    NAME: '',
  },
  89: {
    ADDRESS: '0x88E602C8DFC84B311b36d216F1342e8492B5F40d',
    SYMBOL: 'BUSD',
    NAME: 'BUSD',
  },
}

export const RPC_URLS: CHAINID_MAPPING = {
  56: 'https://bsc-dataseed.binance.org',
  88: 'https://rpc.tomochain.com',
  89: 'https://testnet.tomochain.com',
}

export const TX_SCANERS: CHAINID_MAPPING = {
  56: 'https://bscscan.com/tx/',
  88: 'https://tomoscan.io/tx/',
  89: 'https://testnet.tomoscan.io/tx/',
}

export const NAME = 'MOL'

export const HEADER_LINKS = {
  VESTING: TOKENS_PATH,
  // "AIRDROP": AIRDROP_PATH,
  // Whitepaper: "/paper.pdf",
  // Social: SOCIAL,
}

export const MOBILE_HEADER_LINKS = {
  VESTING: TOKENS_PATH,
  // Airdrop: AIRDROP_PATH,
  // Whitepaper: "/paper.pdf",
}
