import Link from "next/dist/client/link";
import React, { FC } from "react";

import { Promo } from "./ui/promo";

type HomeType = {};

export const Home: FC<HomeType> = () => {
	return (
		<>
			<Promo />
		</>
	);
};
