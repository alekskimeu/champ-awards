import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./image.module.css";

const ImageContainer = ({ image, name, alt }) => {
	return (
		<div
			className={styles.container}
			data-aos="fade-up"
			data-aos-duration="1600"
		>
			<Image
				src={image}
				alt={alt ? alt : "Champ Awards"}
				className={styles.image}
				layout="fill"
			/>
		</div>
	);
};

export default ImageContainer;
