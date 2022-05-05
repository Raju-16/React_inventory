import "./App.css";
import { useState } from "react";

function App() {
  const [book, setbook] = useState(13);
  const [inkpen, setinkpen] = useState(78);
  const [pen, setpen] = useState(10);
  const [notebook, setnotebook] = useState(44);

  const handlechange = (value) => {
    setbook(book + value);
  };
  const handlechange1 = (value) => {
    setinkpen(inkpen + value);
  };
  const handlechange2 = (value) => {
    setpen(pen + value);
  };
  const handlechange3 = (value) => {
    setnotebook(notebook + value);
  };

  return (
    <div>
      <div className="items">
        <div>
          <span>Books:</span>
          <button
            className="addBook"
            onClick={() => {
              handlechange(1);
            }}
          >
            +
          </button>
          <button
            className="remBook"
            onClick={() => {
              handlechange(-1);
            }}
          >
            -
          </button>
          <span className="totalBooks"> {book} </span>
        </div>
      </div>

      <div className="items">
        <div>
          <span>Pens:</span>
          <button
            className="addPen"
            onClick={() => {
              handlechange2(1);
            }}
          >
            +
          </button>
          <button
            className="remPen"
            onClick={() => {
              handlechange2(-1);
            }}
          >
            -
          </button>
          <span className="totalPens">{pen}</span>
        </div>
      </div>

      <div className="items">
        <div>
          <span>NoteBooks:</span>
          <button
            className="addNotebook"
            onClick={() => {
              handlechange3(1);
            }}
          >
            +
          </button>
          <button
            className="remNotebook"
            onClick={() => {
              handlechange3(-1);
            }}
          >
            -
          </button>
          <span className="totalNotebooks">{notebook}</span>
        </div>
      </div>

      <div className="items">
        <div>
          <span>InkPens:</span>
          <button
            className="addInkpen"
            onClick={() => {
              handlechange1(1);
            }}
          >
            +
          </button>
          <button
            className="remInkpen"
            onClick={() => {
              handlechange1(-1);
            }}
          >
            -
          </button>
          <span className="totalInkpens">{inkpen}</span>
        </div>
      </div>

      <div className="total">Total:{book + inkpen + notebook + pen}</div>
    </div>
  );
}

export default App;
