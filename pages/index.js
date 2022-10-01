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
		<>
			<Head>
				<title>Champ Awards - Official website</title>
				<meta
					name="description"
					content="Celebrating students in music, acting, sports, and other fields of entertainment"
				/>
			</Head>

			<Layout>
				<Hero />
				<Purposes />
				<section className={styles.countdown}>
					<div className={styles.container}>
						<div className={styles.header}>
							<h1 className={styles.heading}>7TH OCTOBER 2022</h1>
							<h2 className={styles.subheading}>The Champ way 🚀!</h2>
						</div>
						<Countdown />
					</div>
				</section>
				<Gallery />
				<GetInvolved />
				<SocialMedia />
			</Layout>
		</>
	);
}
