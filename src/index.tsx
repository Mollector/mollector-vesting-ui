import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import reportWebVitals from 'reportWebVitals'
import { ToastContainer } from 'react-toastify'
import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { RefreshContextProvider } from 'context/RefreshContext'
import ModalProvider from 'modules/modal/ModalProvider'
import App from 'App'

function getLibrary(provider: any) {
  const library = new Web3Provider(provider)
  library.pollingInterval = 8000
  return library
}

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <Web3ReactProvider getLibrary={getLibrary}>
        <RefreshContextProvider>
          <ModalProvider>
            <App />
            <ToastContainer />
          </ModalProvider>
        </RefreshContextProvider>
      </Web3ReactProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
