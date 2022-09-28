import React from "react";

import Purpose from "../purpose/Purpose";

import { purposes } from "../../data/purposes";

import styles from "./purposes.module.css";

const Purposes = () => {
	return (
		<section className={styles.purposes}>
			<div
				className={styles.content}
				data-aos="fade-right"
				data-aos-duration="1600"
			>
				<h1 className={styles.title}>Champ Awards</h1>
				<p className={styles.description}>
					Celebrate students in music, acting, sports, and other fields of
					entertainment.
				</p>
			</div>
			<div className={styles.wrapper}>
				{purposes.map((purpose) => (
					<Purpose purpose={purpose} key={purpose.index} />
				))}
			</div>
		</section>
	);
};

export default Purposes;
