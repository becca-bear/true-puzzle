import React from "react";
import "./App.css";
import "./puzzle.css";

const rows: number = 5;
const columns: number = 5;


function shuffleArray(array:React.ReactNode[] = []) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
function App() {
  const tiles: React.ReactNode[] = [];
  for (let r: number = 0; r < 25; r++) {
    tiles.push(
      <img
        src={"./images/blank.jpg"}
        alt=""
        key={r}
        onDragStart={(event) => {
          console.log("dragstart", event);
          //event.src
          //event.preventDefault()
        }}
      ></img>
    );
  }
  const pieces: React.ReactNode[] = [];
  for (let imageNumber = 1; imageNumber < 25; imageNumber++) {
    pieces.push(
      <img
        src={`./images/image_part_${imageNumber
          .toString()
          .padStart(3, "0")}.jpg`}
        alt=""
        key={imageNumber}
      ></img>
    );
 
  }
shuffleArray(pieces)

  return (
    <div className="App">
      <div id="board">{tiles}</div>
      <h2>
        Turns: <span id="turns">0</span>
      </h2>
      <div id="pieces">{pieces}</div>
    </div>
  );
}

export default App;
