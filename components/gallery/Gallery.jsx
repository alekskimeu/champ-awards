import Link from "next/link";
import React from "react";
import { photos } from "../../data/photos";
import ImageContainer from "../image/ImageContainer";

import styles from "./gallery.module.css";

const Gallery = () => {
	return (
		<section className={styles.gallery}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h3 className={styles.heading}>Photos</h3>
					<Link href="/gallery">
						<a>
							All Photos <i className="fas fa-arrow-right-long"></i>
						</a>
					</Link>
				</div>
				<div className={styles.wrapper}>
					{photos.slice(0, 4).map((photo) => (
						<ImageContainer
							image={photo.image}
							key={photo.index}
							alt={photo.name}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Gallery;
