import { useState } from "react";
import converter from "number-to-words";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [word, setWord] = useState("");

  const getNumber = (number) => {
    setNumber(number);
    setWord("");
  };

  const convert = () => {
    const numberToWord = converter.toWords(number);
    setWord(numberToWord);
  };

  const clear = () => {
    let getValue = document.getElementById("myInput");
    if (getValue.value != "") {
      getValue.value = "";
    }

    setWord("");
  };

  return (
    <div className=" container mx-auto mt-16 | main-container">
      <div className="mockup-window border bg-base-400">
        <div className=" px-4 py-16 bg-base-300">
          <h1 className="text-center text-2xl font-bold mb-7">
            Number To Word
          </h1>
          <div className="flex justify-center">
            <input
              id="myInput"
              type="number"
              name="number"
              placeholder="Enter your number"
              className="p-3 rounded"
              onChange={(e) => getNumber(e.target.value)}
            />
            &nbsp;&nbsp;
            <button className="btn" onClick={convert}>
              Convert
            </button>
            &nbsp;
            <button className="btn" onClick={clear}>
              Clear
            </button>
          </div>
          <div className="block text-center mt-14">
            {word && <h1 className="text-2xl">{word}</h1>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
