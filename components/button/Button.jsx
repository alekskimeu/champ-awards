import Link from "next/link";
import React from "react";

import styles from "./button.module.css";

const Button = ({ url, title, icon }) => {
	return (
		<Link href={url}>
			<a className={styles.btnVote}>
				{title} {icon && <i className="fas fa-arrow-right-long"></i>}
			</a>
		</Link>
	);
};

export default Button;
