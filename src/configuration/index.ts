import devConfigs from './dev'
import prodConfigs from './prod'

const env = process.env.REACT_APP_ENV

// eslint-disable-next-line no-restricted-globals
const configs = env === 'dev' || location.host.indexOf('localhost') === 0 ? devConfigs : prodConfigs

export default Object.freeze({ ...configs })
