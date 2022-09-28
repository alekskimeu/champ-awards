import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import styles from "./layout.module.css";

const Layout = ({ children }) => {
	useEffect(() => {
		AOS.init();
	});
	return (
		<>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<Header />
					{children}
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
