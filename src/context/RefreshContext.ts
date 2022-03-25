// import React, { useState } from 'react'
// import useInterval from '../hooks/useInterval'

// const SLOW_INTERVAL = 5000
// const FAST_INTERVAL = 1000

// const RefreshContext = React.createContext({
//   slow: 0,
//   fast: 0,
// })
// useInterval
// // Utility function to force component to rerender - or rerun a specific hook
// const RefreshContextProvider = ({ children }) => {
//   const [slow, setSlow] = useState(0)
//   const [fast, setFast] = useState(0)

//   useInterval(() => {
//     setSlow(slow + 1)
//   }, SLOW_INTERVAL)

//   useInterval(() => {
//     setFast(fast + 1)
//   }, FAST_INTERVAL)

//   return (
//     <RefreshContext.Provider
//       value={{
//         slow,
//         fast,
//       }}
//     >
//       {children}
//     </RefreshContext.Provider>
//   )
// }

// export { RefreshContext, RefreshContextProvider }
