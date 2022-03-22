import classNames from "classnames";
import { FC } from "react";

import styles from "./Promo.module.scss";
import { MaybeWithClassName } from "../../../../helper/react/types";
import { GutterBox } from "../../../../ui/gutter-box";
import { Heading1 } from "../../../../ui/typography";
import { TextColor } from "../../../../ui/text-color";
import { Link } from "react-router-dom";
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
					<button style={{
						  textDecoration: 'none',
						  fontSize: '16px',
						  fontWeight: 'bold',
						  color: '#ffffff',
						  background: 'rgb(56, 215, 213)',
						  marginTop: '50px',
						  border: '1px solid rgb(56, 215, 213)',
						  padding: '15px 30px',
						  borderRadius: '50px',
						  cursor: 'pointer'
					}}>
						CLAIM YOUR TOKEN
					</button>
				</Link>
			</GutterBox>
		</section>
	);
};
