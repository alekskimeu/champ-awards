import React, { useState, useEffect } from "react";

import styles from "./countdown.module.css";

const Countdown = ({ date }) => {
	const [countdownDate, setCountdownDate] = useState(
		new Date("10/06/2022").getTime()
	);

	const [state, setState] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		setInterval(() => setNewTime(), 1000);
	}, []);

	const setNewTime = () => {
		if (countdownDate) {
			const currentTime = new Date().getTime();

			const distanceToDate = countdownDate - currentTime;

			let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
			let hours = Math.floor(
				(distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			let minutes = Math.floor(
				(distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
			);
			let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

			const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

			days = `${days}`;
			if (numbersToAddZeroTo.includes(hours)) {
				hours = `0${hours}`;
			} else if (numbersToAddZeroTo.includes(minutes)) {
				minutes = `0${minutes}`;
			} else if (numbersToAddZeroTo.includes(seconds)) {
				seconds = `0${seconds}`;
			}

			setState({ days: days, hours: hours, minutes, seconds });
		}
	};

	return (
		<section className={styles.container}>
			<div className={styles.unit}>
				<h1 className={styles.amount}>{state.days}</h1>
				<p className={styles.description}>Days</p>
			</div>
			<div className={styles.unit}>
				<h1 className={styles.amount}>{state.hours}</h1>
				<p className={styles.description}>Hours</p>
			</div>
			<div className={styles.unit}>
				<h1 className={styles.amount}>{state.minutes}</h1>
				<p className={styles.description}>Minutes</p>
			</div>
			<div className={styles.unit}>
				<h1 className={styles.amount}>{state.seconds}</h1>
				<p className={styles.description}>Seconds</p>
			</div>
		</section>
	);
};

export default Countdown;
