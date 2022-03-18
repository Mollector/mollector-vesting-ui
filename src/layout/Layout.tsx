import classNames from "classnames";
import { FC, ReactNode } from "react";

import styles from "./Layout.module.scss";
import theme from "../ui/styles/Theme.module.scss";
import mobileTheme from "../ui/styles/MobileTheme.module.scss";
import { Header } from "../modules/header";
import { getModeClassName } from "../ui/utils/get-theme-class-name";
import { ConnectionModal, Web3ProviderRoot } from "../web3/Web3Provider";

type LayoutType = {
	children?: ReactNode;
	title?: string;
	description?: string;
	keywords?: string;
	className?: string;
	mode?: "dark" | "light" | "transparent";
	fixedHeader?: boolean;
	withDecoration?: boolean;
	web3?: boolean;
};

export const Layout: FC<LayoutType> = ({
	children,
	className,
	title = "",
	description = "",
	keywords,
	mode = "dark",
	fixedHeader,
	withDecoration,
	web3 = false,
}) => {
	return (
		<div
			className={classNames(
				styles.component,
				getModeClassName(mode, theme),
				getModeClassName(mode, mobileTheme),
				className
			)}
		>
			{/* <Head>
				<title>{title}</title>
				<meta name="Description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head> */}
			<Header className={styles.header} fixed={fixedHeader} />
			<main className={styles.main}>
				<Web3ProviderRoot>
					{web3 ? (
						<>
							<ConnectionModal />
							{children}
						</>
					) : (
						<>{children}</>
					)}
				</Web3ProviderRoot>
			</main>
			{withDecoration && (
				<div className={styles.decoration}>
				</div>
			)}
			<footer
				style={{
					marginTop: 150,
					padding: 20,
					textAlign: "center",
					fontSize: 15,
					opacity: 0.7,
					position: "fixed",
					bottom: 0,
					left: 0,
					right: 0,
				}}
			>
				Powered by Mollector
			</footer>
		</div>
	);
};
