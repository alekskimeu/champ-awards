import React from "react";
import { Layout, ImageContainer } from "../components";

import { photos } from "../data/photos";
import styles from "../styles/Gallery.module.css";

const gallery = () => {
	return (
		<Layout>
			<section className={styles.gallery}>
				<div className={styles.container}>
					{photos.map((photo) => (
						<ImageContainer
							image={photo.image}
							key={photo.index}
							alt={photos.name}
						/>
					))}
				</div>
			</section>
		</Layout>
	);
};

export default gallery;
