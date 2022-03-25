import { Link } from "react-router-dom";
import { FC } from "react";
import classNames from "classnames";
import styles from "./Promo.module.scss";
import { MaybeWithClassName } from "../../../../helper/react/types";
import { GutterBox } from "../../../../ui/gutter-box";
import { Heading1 } from "../../../../ui/typography";
import { TextColor } from "../../../../ui/text-color";
type PromoType = {};

export const Promo: FC<PromoType & MaybeWithClassName> = ({ className }) => {
	return (
		<section className={classNames(className, styles.component)} style={{ marginTop: 50 }}>
			<GutterBox className={styles.wrapper}>
				<Heading1 className={styles.title}>
					The <TextColor color="pink">Decentralized Game</TextColor>
					<br />
					to Revolutionize Gamble Industry.
				</Heading1>

				<Link to={"/vesting"}>
					<button className={styles.button}>
						CLAIM YOUR TOKEN
					</button>
				</Link>
				<Link to={"/staking"}>
					<button className={styles.button}>
						STAKE YOUR TOKEN
					</button>
				</Link>
			</GutterBox>
		</section>
	);
};
