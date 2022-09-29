import React from "react";
import Link from "next/link";

import Button from "../button/Button";

import styles from "./getInvolved.module.css";

const GetInvolved = () => {
	return (
		<section className={styles.getInvolved}>
			<div
				className={styles.content}
				data-aos="fade-up"
				data-aos-duration="1400"
			>
				<h1 className={styles.title}>Get Involved</h1>
				<p className={styles.description}>
					We are giving interested corporate and individual partners an
					opportunity to come on board.
				</p>
				<div className={styles.cta}>
					<Button url="/vote" title="Vote" />
					<Link href="/about">
						<a className="btn-sponsor">
							Learn more<i className="fas fa-arrow-right-long"></i>
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default GetInvolved;
