import React from "react";

import ImageContainer from "../image/ImageContainer";

import ladies from "../../public/assets/ladies.webp";
import styles from "./customHero.module.css";

const CustomHero = ({ title, description }) => {
	return (
		<section className={styles.hero}>
			<div className={styles.container}>
				<div
					className={styles.content}
					data-aos="fade-right"
					data-aos-duration="2000"
				>
					<h1 className={styles.title}>{title}</h1>
					<h2 className={styles.description}>{description}</h2>
					<div className={styles.cta}>
						<a href="" className="contact-icon">
							<i className="fas fa-phone"></i> +255-685-652-130
						</a>
						<a
							href="mailto:michael.nandwa@arushameru.sc.tz"
							className="contact-icon"
						>
							<i className="fas fa-envelope"></i>{" "}
							michael.nandwa@arushameru.sc.tz
						</a>
					</div>
				</div>
				<ImageContainer image={ladies} />
			</div>
		</section>
	);
};

export default CustomHero;
