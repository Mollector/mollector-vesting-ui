import baseConfigs from './base'

const configs = {
  API_CYBALL: 'https://cyball-api.azurewebsites.net/api',
  // API_CYBALL: 'http://localhost:7071/api',
  NETWORK: 'tomochain',
  API_MARKETPLACE: 'https://marketplace-api-test.cyball.com/api/static',
  SUPPORTED_CHAINID: 89,
  SUPPORTED_RPC: 'https://rpc.testnet.tomochain.com/',
  BLOCK_EXPLORER_URLS: 'https://scan.testnet.tomochain.com/',
}

export default Object.freeze({
  ...baseConfigs,
  ...configs,
})
