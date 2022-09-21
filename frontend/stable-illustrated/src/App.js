import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/books/Genesis/1.txt')
      .then((r) => r.text())
      .then((t) => {
        setText(t.split("\n"));
      });
  }, [setText]);

  console.log(process.env.PUBLIC_URL)
  return (
    <div className="App">
      <logo/>
      <header className="App-header">
        {text.map((sentence, index) => {
          const imgPath =
            `${process.env.PUBLIC_URL}/books/Genesis/images/${index}/0.png`
          return (
            <>
              <div>{sentence}</div>
              {imgPath && <img src={imgPath}></img>}
            </>
          );
        })}
      </header>
    </div>
  );
}

export default App;
