import React from "react";

import styles from "./socialMedia.module.css";

const SocialMedia = () => {
	return (
		<section className={styles.social}>
			<div
				className={styles.wrapper}
				data-aos="fade-up"
				data-aos-duration="1600"
			>
				<h3 className={styles.title}>Find us online:</h3>
				<div className={styles.icons}>
					<a href="" className="social-media-icon" target="_blank">
						<i className="fab fa-facebook"></i>
					</a>
					<a
						href="https://www.instagram.com/champ_awards/"
						className="social-media-icon"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-instagram"></i>
					</a>
					<a href="" className="social-media-icon" target="_blank">
						<i className="fab fa-twitter"></i>
					</a>
				</div>
			</div>
		</section>
	);
};

export default SocialMedia;
