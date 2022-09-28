import React from "react";
import Link from "next/link";

import styles from "./footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.links}>
					<Link href="/">
						<a className={styles.footerLink}>Home</a>
					</Link>
					<Link href="/sponsor">
						<a className={styles.footerLink}>About</a>
					</Link>
					<Link href="/vote">
						<a className={styles.footerLink}>Vote</a>
					</Link>
				</div>
				<p className={styles.copyright}>
					&copy;{new Date().getFullYear()} Champ Awards
				</p>
			</div>
		</footer>
	);
};

export default Footer;
