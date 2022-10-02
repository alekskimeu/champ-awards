import React, { useState, useEffect } from "react";

import styles from "./countdown.module.css";

const Countdown = ({ color }) => {
	const date = "10/07/2022";
	const [countdownDate, setCountdownDate] = useState(new Date(date).getTime());

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

			if (currentTime < countdownDate) {
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
		}
	};

	return (
		<section className={styles.container}>
			<div
				className={styles.unit}
				style={{ backgroundColor: color ? color : "white" }}
			>
				<h1
					className={styles.amount}
					style={{ color: color ? "white" : "black" }}
				>
					{state.days}
				</h1>
				<p
					className={styles.description}
					style={{ color: color ? "white" : "black" }}
				>
					Days
				</p>
			</div>
			<div
				className={styles.unit}
				style={{ backgroundColor: color ? color : "white" }}
			>
				<h1
					className={styles.amount}
					style={{ color: color ? "white" : "black" }}
				>
					{state.hours}
				</h1>
				<p
					className={styles.description}
					style={{ color: color ? "white" : "black" }}
				>
					Hours
				</p>
			</div>
			<div
				className={styles.unit}
				style={{ backgroundColor: color ? color : "white" }}
			>
				<h1
					className={styles.amount}
					style={{ color: color ? "white" : "black" }}
				>
					{state.minutes}
				</h1>
				<p
					className={styles.description}
					style={{ color: color ? "white" : "black" }}
				>
					Minutes
				</p>
			</div>
			<div
				className={styles.unit}
				style={{ backgroundColor: color ? color : "white" }}
			>
				<h1
					className={styles.amount}
					style={{ color: color ? "white" : "black" }}
				>
					{state.seconds}
				</h1>
				<p
					className={styles.description}
					style={{ color: color ? "white" : "black" }}
				>
					Seconds
				</p>
			</div>
		</section>
	);
};

export default Countdown;
