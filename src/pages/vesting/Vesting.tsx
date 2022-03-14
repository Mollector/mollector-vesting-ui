import React, { FC, useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./Vesting.module.scss";
import theme from "../../ui/styles/Theme.module.scss";
import { GutterBox } from "../../ui/gutter-box";
import { getModeClassName } from "../../ui/utils/get-theme-class-name";
import { Loading } from "../../modules/loading";
import { useWeb3React } from "@web3-react/core";
import { Step } from "./ui/step";
import { Timer } from "../../modules/timer";

type TokensType = {};

export const Vesting: FC<TokensType> = () => {
	const [airdropStart, setAirdropStart] = useState(false);

	const { active, account: ethereumAddress } = useWeb3React();

	return (
		<>
			<section className={styles.component}>
				<GutterBox className={styles.gutter}>
					<div className={classNames(styles.wrapper, getModeClassName("light", theme))}>
						{!active ? (
							<></>
						) : (
							<Step />
						)}
					</div>
				</GutterBox>
			</section>
		</>
	);
};
