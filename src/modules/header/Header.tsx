import classNames from "classnames";
import { FC } from "react";

import styles from "./Header.module.scss";
import { MaybeWithClassName } from "../../helper/react/types";
import { NavLink } from "../../ui/button";
import { ColorLogo } from "../../ui/icons/Icons";

type HeaderType = {
	fixed?: boolean;
};

export const Header: FC<HeaderType & MaybeWithClassName> = ({ className, fixed }) => {

	return (
		<header className={classNames(styles.component, fixed && styles.fixed, className)}>
			<div className={styles.wrapper}>
				<NavLink className={styles.logo} href="/" icon={<ColorLogo />} variant="text">
					Home
				</NavLink>
			</div>
		</header>
	);
};
