import React from "react";
import Image from "next/image";

import styles from "./purpose.module.css";

const Purpose = ({ purpose }) => {
	return (
		<div className={styles.purpose} data-aos="fade-up" data-aos-duration="1600">
			<Image src={purpose.image} alt={purpose.title} width="40" height="40" />
			<h2 className={styles.title}>{purpose.title}</h2>
			<p className={styles.description}>{purpose.description}</p>
		</div>
	);
};

export default Purpose;
