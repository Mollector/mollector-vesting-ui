import VestingABI from "./abi/Vesting.json";
import Contract from "web3-eth-contract";
import type { Contract as ContractType } from "web3-eth-contract";
import { AbiItem } from "web3-utils";
import { useMemo } from "react";

const factoryContract = (abi: any, provider: string, address: string): ContractType => {
	// @ts-ignore
	const airdropContract = new Contract(abi as AbiItem[], address);
	if (provider) {
		airdropContract.setProvider(provider);
	}
	return airdropContract;
};

export const useVestingContract = (provider: string, address: string) => {
	return useMemo(() => factoryContract(VestingABI, provider, address), [provider]);
};