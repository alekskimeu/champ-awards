import React from "react";
import Head from "next/head";
import { Layout, ImageContainer, SocialMedia } from "../components";

import { photos } from "../data/photos";
import styles from "../styles/Gallery.module.css";

const gallery = () => {
	return (
		<>
			<Head>
				<title>Champ Awards - Gallery</title>
				<meta
					name="description"
					content="From the archives: photos from out past events"
				/>
			</Head>
			<Layout>
				<section className={styles.gallery}>
					<div className={styles.container}>
						{photos.map((photo) => (
							<ImageContainer
								image={photo.image}
								key={photo.index}
								alt={photo.name}
							/>
						))}
					</div>
					<SocialMedia />
				</section>
			</Layout>
		</>
	);
};

export default gallery;
