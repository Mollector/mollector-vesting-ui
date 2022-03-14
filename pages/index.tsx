import { pageWithLayout } from "../src/utils/page/pageInLayout";
import { Layout } from "../src/layout";
import { Home } from "../src/pages/home";

const Index = pageWithLayout(
	() => <Home />,
	({ children }) => (
		<Layout
			title="MaxBet | PigFarmTeam"
			description="The Decentralized House, Revolutionize Gamble Industry."
		>
			{children}
		</Layout>
	)
);

export default Index;
