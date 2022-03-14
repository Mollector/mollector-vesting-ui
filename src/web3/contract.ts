import VestingABI from "./abi/Vesting.json";
import Contract from "web3-eth-contract";
import type { Contract as ContractType } from "web3-eth-contract";
import { AbiItem } from "web3-utils";
import { useMemo } from "react";
import { VESTING_CONTRACT_ADDRESS } from "../const/const";

const getAirdropAddress = (chainId: number) => {
	return VESTING_CONTRACT_ADDRESS[chainId]
};

const factoryContract = (abi: any, provider: string, chainId: number): ContractType => {
	// @ts-ignore
	const airdropContract = new Contract(abi as AbiItem[], getAirdropAddress(chainId));
	if (provider) {
		airdropContract.setProvider(provider);
	}
	return airdropContract;
};

export const useVestingContract = (provider?: string, chainId?: number) => {
	return useMemo(() => factoryContract(VestingABI, provider, chainId), [provider]);
};