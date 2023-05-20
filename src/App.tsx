import { useState } from "react";
import "./App.css";
import {createRandomArray} from "./utils";
interface IBomBox {
  id: number;
  isBomb: boolean;
  marked: boolean;
}
function App() {
  const [tries, setTries] = useState(3);
  const [bombBoxes, setBombBoxes] = useState<IBomBox[]>([
    {
      id: 0,
      isBomb: false,
      marked: false,
    },
    {
      id: 1,
      isBomb: false,
      marked: false,
    },
    {
      id: 2,
      isBomb: true,
      marked: false,
    },
    {
      id: 3,
      isBomb: false,
      marked: false,
    },
    {
      id: 4,
      isBomb: false,
      marked: false,
    },
    {
      id: 5,
      isBomb: true,
      marked: false,
    },
    {
      id: 6,
      isBomb: false,
      marked: false,
    },
    {
      id: 7,
      isBomb: true,
      marked: false,
    },
    {
      id: 8,
      isBomb: false,
      marked: false,
    },
  ]);
  const handleWin = bombBoxes.filter((x) => x.isBomb == true).every((x) => x.marked == true);
  const handleBoxClick = (box: IBomBox) => {
    if (box.isBomb) {
      setBombBoxes((state) => {
        const updateBoxes = state.map((x) => {
          if (box.id === x.id) {
            return { ...x, marked: true };
          }
          return x;
        });
        return updateBoxes;
      });
    }
    setTries((state) => state - 1);
  };
  if (handleWin) {
    return <h1>You Win</h1>;
  }
  if (tries <= 0) {
    return <h1>You Lose</h1>;
  }
  return (
    <div className="App">
      <h2>Remaining Tries: {tries}</h2>
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
    </div>
  );
}

export default App;
