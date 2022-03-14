import { pageWithLayout } from "../src/utils/page/pageInLayout";
import { Layout } from "../src/layout";
import { Vesting } from "../src/pages/vesting";
import NoSsr from "../src/modules/no-ssr/NoSsr";

const Index = pageWithLayout(
	() => (
		<NoSsr>
			<Vesting />
		</NoSsr>
	),
	({ children }) => (
		<Layout
			title="MaxBet | PigFarmTeam"
			description="The Decentralized House to Revolutionize Gamble Industry."
			mode="transparent"
			fixedHeader={true}
			withDecoration={true}
			web3={true}
		>
			{children}
		</Layout>
	)
);

export default Index;
