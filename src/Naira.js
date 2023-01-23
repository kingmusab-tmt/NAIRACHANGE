import React from "react";
import { useState, useEffect } from "react";
import Changes from "./Backend";
// import { getChange } from "./Backend";
import { resetForm } from "./Backend";

function Naira() {
  const [note, setNote] = useState("");
  const [result, setResult] = useState({});

  function handleChange(event) {
    const value = event.target.value;
    setNote(value);
  }

  function getChange(event) {
    event.preventDefault();
    const value = +note;
    const myChange = new Changes();
    if (value === "") {
      throw "Please Input a value";
    } else {
      try {
        const response = myChange.pieces(value);
        setResult(response);
      } catch (error) {
        console.log(error);
      }
    }
  }

  //   useEffect(() => {
  //     result = {};
  //   }, [result, setResult]);

  return (
    <div className="container text-center">
      <form id="naira-change" className="myForm" onSubmit={getChange}>
        <div className="formside">
          <h3>Hello! Let Break it Down for you!!</h3>
          <label htmlFor="amount">HOW MUCH DO YOU WISH TO BE BREAK DOWN</label>
          <br />
          <input
            type="text"
            name="amount"
            id="amount"
            value={note}
            onChange={handleChange}
            placeholder="write the amount here"
          ></input>
          <br />
          <button type="submit" value="submit" className="btn btn-success">
            Get Pieces
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => resetForm(setNote, setResult)}
          >
            Reset
          </button>
        </div>
        {Object.keys(result).length !== 0 && (
          <div className="result" id="result">
            <table className="table">
              <thead>
                <tr>
                  <th>Denomination</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(result).map((key, index) => (
                  <tr key={index}>
                    <td>{key}</td>
                    <td>{result[key]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </form>
    </div>
  );
}

export default Naira;
