import Head from "next/head";

import {
	Layout,
	Gallery,
	GetInvolved,
	Hero,
	Purposes,
	SocialMedia,
} from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<Layout>
			<Hero />
			<Purposes />
			<Gallery />
			<GetInvolved />
			<SocialMedia />
		</Layout>
	);
}
