import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { PROVIDER_POLLING_INTERVAL, RPC_URLS } from "../const/const";

const metaMaskFactory = () =>
	new InjectedConnector({
		supportedChainIds: [89, 88, 56],
	});

const walletConnectFactory = () =>
	new WalletConnectConnector({
		rpc: RPC_URLS,
		bridge: "https://bridge.walletconnect.org",
		qrcode: true,
		pollingInterval: PROVIDER_POLLING_INTERVAL,
	} as any);

export const KNOWN_WALLETS: {
	[key: string]: any
} = {
	MetaMask: metaMaskFactory,
	WalletConnect: walletConnectFactory,
};

export type KNOWN_WALLET_KEY = keyof typeof KNOWN_WALLETS;
