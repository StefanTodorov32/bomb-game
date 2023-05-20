import React, {useEffect, useState} from "react";
import "./App.css";
import {createRandomArray} from "./utils";
import {IBombBox} from "./types";


function App() {
	const [bombCounter, setBombCounter] = useState<number>(3);
	const [tries, setTries] = useState<number>(3);
	const [bombBoxes, setBombBoxes] = useState<IBombBox[]>(() =>
		createRandomArray(bombCounter)
	);
	const handleWin = bombBoxes
		.filter((box) => box.isBomb == true)
		.every((box) => box.marked == true);

	const handleBoxClick = (box: IBombBox) => {
		if (box.isBomb) {
			setBombBoxes((state) =>
				state.map((x) => (box.id === x.id ? {...x, marked: true} : x))
			);
		}
		setTries((state) => state - 1);
	};
	const handleResetGame = () => {
		setBombCounter(3);
		setBombBoxes(() => createRandomArray(3));
		setTries(3);
	};

	useEffect(() => {
		setBombBoxes(() => createRandomArray(bombCounter));
		setTries(bombCounter);
	}, [bombCounter]);

	return (
		<div className="App">
			{handleWin && <h1>You Win</h1>}
			{tries <= 0 && <h1>You Lose</h1>}
			{!handleWin && tries > 0 ? (
				<>
					<h2>Remaining Tries: {tries}</h2>
					<input
						type="number"
						value={bombCounter}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setBombCounter(Number(e.target.value))
						}
					/>
					<div className="wrapper">
						{bombBoxes.map((box) => (
							<button
								className="box"
								key={box.id}
								onClick={() => handleBoxClick(box)}
							>
								{box.marked ? "🔥" : "💣"}
							</button>
						))}
					</div>
				</>
			) : <button
				onClick={handleResetGame}
			>Reset Game</button>}
		</div>
	);
}

export default App;
