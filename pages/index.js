import Head from "next/head";

import {
	Countdown,
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
			<section className={styles.countdown}>
				<div className={styles.container}>
					<div className={styles.header}>
						<h1 className={styles.heading}>7TH OCTOBER 2022</h1>
						<h2 className={styles.subheading}>Let&#39;s freaking gooo 🚀!</h2>
					</div>
					<Countdown />
				</div>
			</section>
			<Gallery />
			<GetInvolved />
			<SocialMedia />
		</Layout>
	);
}
