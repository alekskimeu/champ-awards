import React, { useEffect } from "react";
import Link from "next/link";

import Button from "../button/Button";
import ImageContainer from "../image/ImageContainer";
import Countdown from "../countdown/Countdown";

import champ from "../../public/assets/logo.png";

import styles from "./hero.module.css";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.container}>
				<div
					className={styles.content}
					data-aos="fade-right"
					data-aos-duration="1400"
				>
					<h1 className={styles.title}>
						CHAMP AWARDS {new Date().getFullYear()}
					</h1>
					<h2 className={styles.description}>
						The Annual CHAMP AWARDS {new Date().getFullYear()} edition will be
						happening on
						<span className={styles.date}> 7th October 2022</span>
						<br />
						In the meantime, be sure to vote for your favorite finalist!
					</h2>
					<Countdown />
					<div className={styles.cta}>
						<Button url="/vote" title="Vote" />
						<Link href="/about">
							<a className={styles.learnMore}>
								Learn more
								<i className="fas fa-arrow-right-long"></i>
							</a>
						</Link>
					</div>
				</div>
				<ImageContainer hero={true} image={champ} />
			</div>
		</section>
	);
};

export default Hero;
