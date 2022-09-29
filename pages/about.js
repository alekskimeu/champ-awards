import Image from "next/image";
import React from "react";
import {
	Countdown,
	Layout,
	ImageContainer,
	Purposes,
	Purpose,
	SocialMedia,
	GetInvolved,
} from "../components";

import image from "../public/assets/hero.png";

import styles from "../styles/About.module.css";
import { purposes } from "../data/purposes";
import Head from "next/head";

const about = () => {
	return (
		<>
			<Head>
				<title>Champ Awards - About</title>
				<meta
					name="description"
					content="We believe in recognizing and motivating students to reach higher heights"
				/>
			</Head>
			<Layout>
				<section className={styles.about}>
					<div className={styles.container}>
						<div className={styles.content}>
							<h1 className={styles.heading}>Champ Awards</h1>
							<h2 className={styles.subheading}>
								Let&#39;s celebrate students in music, acting, sports, and other
								fields of entertainment
							</h2>

							<div className={styles.purposes}>
								{purposes.map((purpose) => (
									<Purpose key={purpose.index} purpose={purpose} />
								))}
							</div>
							<div className={styles.countdown}>
								<Countdown color="#111957" />
							</div>
						</div>
					</div>

					<GetInvolved />
					<SocialMedia />
				</section>
			</Layout>
		</>
	);
};

export default about;
