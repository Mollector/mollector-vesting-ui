import styles from "./Step.module.scss";
import { Button, NavLink } from "../../../../ui/button";
import { Box } from "../../../../modules/box";
import { ButtonsGroup } from "../../../../modules/buttons-group";
import { FC } from "react";
import { NAME } from "../../../../const/const";
import { walletConversion } from "../../../../utils/page/convertWallet";

type ClaimType = {
	amount: {
		releaseAmount: number,
		lockedAmount: number,
		totalShare: number,
		released: number,
		unlocked: number,
		tge: number,
		cliff: number,
		duration: number
	};
	ethAddress: string;
	disabled: boolean;
	onClick(): void;
};

export const Claim: FC<ClaimType> = ({ amount, ethAddress, disabled, onClick }) => {
	return (
		<Box className={styles.box}>
			<p className={styles.title}>
				Available Amount:
				<br />
				<span>
					{parseFloat((amount.releaseAmount + amount.lockedAmount).toFixed(4)).toLocaleString()} {NAME}
				</span>
			</p>
			
			{/* <p className={styles.text}>{walletConversion(ethAddress)}</p> */}
			<div
				style={{ display: "flex", width: "100%", justifyContent: "space-around", marginTop: 20 }}
			>
				<NavLink color="pink" size="large" variant="outlined" href="/" style={{ width: "46%" }}>
					Cancel
				</NavLink>
				<Button
					color="pink"
					size="large"
					variant="contained"
					onClick={onClick}
					disabled={disabled}
					style={{ width: "46%" }}
				>
					{!disabled ? "Claim" : "Claimed"}
				</Button>
			</div>
			<br/>
			<div style={{fontFamily: 'monospace'}}>
				<p className={styles.text}>
					TGE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{new Date(amount.tge).toLocaleDateString()} {new Date(amount.tge).toLocaleTimeString()}
				</p>
				<p className={styles.text}>
					Cliff at:&nbsp;&nbsp;{new Date(amount.cliff).toLocaleDateString()} {new Date(amount.cliff).toLocaleTimeString()}
				</p>
				<p className={styles.text}>
					Finish at:&nbsp;{new Date(amount.tge + amount.duration).toLocaleDateString()} {new Date(amount.tge + amount.duration).toLocaleTimeString()}
				</p>
			</div>
		</Box>
	);
};
