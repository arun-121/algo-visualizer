import { useState } from "react";
import generator from "./utils/generator";

const Test = () => {
  const [arr, setArr] = useState(generator(10));
  const [comparingIndexes, setComparingIndexes] = useState([]);

  function sort() {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        setTimeout(() => {
          setComparingIndexes([i, j]);
          if (arr[j] < arr[i]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            setArr([...arr]);
          }
        }, i * 300); // Adjust timeout calculation
      }
    }
  }

  return (
    <>
      <h1>Sorting Visualization</h1>
      <div
        style={{
          display: "flex",
          width: "500px",
          height: "100px",
          gap: "20px",
        }}
      >
        {arr.map((value, index) => (
          <div
            key={index}
            style={{
              height: `${value * 5}px`, // Adjust height for better visualization
              width: "30px",
              backgroundColor: comparingIndexes.includes(index)
                ? "red"
                : "blue",
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <button type="button" onClick={sort}>
        Sort
      </button>
    </>
  );
};

export default Test;
