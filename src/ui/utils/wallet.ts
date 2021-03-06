// Set of helper functions to facilitate wallet setup
// import { BASE_BSC_SCAN_URL, BASE_URL } from 'config'
// import { nodes } from './getRpcUrl'
import configs from '../../configuration'

/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async () => {
  const provider = window.ethereum

  if (provider) {
    const chainId = configs.SUPPORTED_CHAINID
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: `${configs.NETWORK}`,
            nativeCurrency: {
              name: 'BNB',
              symbol: 'bnb',
              decimals: 18,
            },
            rpcUrls: [`${configs.SUPPORTED_RPC}`],
            blockExplorerUrls: [`${configs.BLOCK_EXPLORER_URLS}`],
          },
        ],
      })
      return true
    } catch (error) {
      //   toast.error('Failed to setup the network in Metamask:', {
      //     hideProgressBar: true,
      //   })
      return false
    }
  } else {
    // toast.error("Can't setup the BSC network on metamask because window.ethereum is undefined", {
    //   hideProgressBar: true,
    // })
    return false
  }
}

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @returns {boolean} true if the token has been added, false otherwise

export const registerToken = async (tokenAddress, tokenSymbol, tokenDecimals) => {
  const tokenAdded = await window.ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: `${BASE_URL}/images/tokens/${tokenAddress}.png`,
      },
    },
  })

  return tokenAdded
}
 */
