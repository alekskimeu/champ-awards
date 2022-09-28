import React from "react";

import styles from "./package.module.css";

const Package = ({ item }) => {
	return (
		<div
			className={styles.package}
			style={{ border: `2px solid ${item.color}` }}
			data-aos="fade-up"
			data-aos-duration="2000"
		>
			<div
				className={styles.header}
				style={{ backgroundColor: `${item.color}` }}
			>
				<h3 className={styles.title}>{item.title}</h3>
				<h4 className={styles.amount}>{item.amount}</h4>
			</div>
			<div className={styles.content}>
				<ul className={styles.benefits}>
					{item.benefits.map((benefit) => (
						<li key={benefit.index}>{benefit}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Package;
