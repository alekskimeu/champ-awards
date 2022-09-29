import React from "react";
import Image from "next/image";

import styles from "./purpose.module.css";

const Purpose = ({ purpose, image }) => {
	return (
		<div
			data-aos={!image ? "fade-up" : ""}
			data-aos-duration={!image ? "1000" : ""}
			className={styles.purpose}
			style={{
				gridTemplateColumns: image ? "repeat(2, 1fr)" : "1fr",
				border: !image && "1px solid #e1ad33",
				padding: !image && "1rem",
				borderRadius: !image && ".5rem",
			}}
		>
			{image && (
				<div
					className={styles.imageContainer}
					data-aos="zoom-in"
					data-aos-duration="1400"
				>
					<Image
						src={purpose.image}
						alt={purpose.title}
						width="350"
						height="320"
						className={styles.image}
					/>
				</div>
			)}
			<div
				className={styles.content}
				data-aos="fade-up"
				data-aos-duration="1400"
			>
				<h2 className={styles.title}>{purpose.title}</h2>
				<p className={styles.description}>{purpose.description}</p>
			</div>
		</div>
	);
};

export default Purpose;
