import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import Button from "../button/Button";

import styles from "./header.module.css";

import logo from "../../public/assets/logo.png";

const Header = () => {
	const [show, setShow] = useState(false);

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Link href="/">
					<a className={styles.brand}>
						<Image
							src={logo}
							alt="Champ Awards"
							width="50"
							height="50"
							className={styles.logo}
						/>
					</a>
				</Link>
				<div className={styles.navbar} style={{ left: show ? "0" : "-100%" }}>
					<div className={styles.menu}>
						<Link href="/">
							<a className={styles.navLink}>Home</a>
						</Link>
						<Link href="/gallery">
							<a className={styles.navLink}>Gallery</a>
						</Link>
						<Link href="/about">
							<a className={styles.navLink}>About</a>
						</Link>
					</div>

					<Button url="/vote" title="Vote" />
				</div>
				<div className={styles.menuIcon}>
					{show ? (
						<i
							className="fas fa-close fa-2x"
							onClick={() => setShow(false)}
						></i>
					) : (
						<i className="fas fa-bars fa-2x" onClick={() => setShow(true)}></i>
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
