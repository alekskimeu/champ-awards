import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./image.module.css";

const ImageContainer = ({ image, name, alt, hero }) => {
	return (
		<div
			className={hero ? styles.hero : styles.container}
			data-aos="zoom-in"
			data-aos-duration="1400"
		>
			<Image
				src={image}
				alt={alt ? alt : "Champ Awards"}
				className={styles.image}
				layout="responsive"
			/>
		</div>
	);
};

export default ImageContainer;
