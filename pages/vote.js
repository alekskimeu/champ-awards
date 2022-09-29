import React from "react";
import Head from "next/head";
import { Layout } from "../components";

import styles from "../styles/Vote.module.css";

const vote = () => {
	return (
		<>
			<Head>
				<title>Champ Awards - Vote</title>
				<meta name="description" content="Vote for your favorite finalist" />
			</Head>
			<Layout>
				<section className={styles.vote}>
					<div className={styles.container}>
						<iframe
							src="https://docs.google.com/forms/d/e/1FAIpQLSe_DBj1pzSVqxitidxA0tYYfKpWapP5v-ytmrcDWEhQNn7_3g/viewform?embedded=true"
							frameborder="0"
							marginheight="0"
							marginwidth="0"
						>
							Loading…
						</iframe>
					</div>
				</section>
			</Layout>
		</>
	);
};

export default vote;
