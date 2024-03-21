import { useState } from "react";
import generator from "./utils/generator";
import { HStack, Box, Button, Select, Code } from "@chakra-ui/react";
import "./index.css";
import Temp from "./Temp";
function App() {
  const [size, setSize] = useState(20);
  const [arr, setArr] = useState(generator(size));
  const [algo, setAlgo] = useState(null);
  const [compareIndices, setCompareIndices] = useState([]);

  const bubbleSort = () => {
    // if (JSON.stringify(arr) == JSON.stringify(arr.sort((a, b) => a - b))) {
    //   console.log("already sorted");
    //   return;
    // }
    let animations = [];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        animations.push([j, j + 1]); // Store the indices to compare
        if (arr[j] > arr[j + 1]) {
          animations.push([j, j + 1]); // Store the indices to swap
        }
      }
    }

    animations.forEach(([i, j], index) => {
      setTimeout(() => {
        setCompareIndices([i, j]);
        if (arr[i] > arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          setArr([...arr]);
        }
      }, index * 300);
    });
  };
  const insertionSort = () => {
    console.log(arr);
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
      setTimeout(() => {
        while (j >= 0 && arr[j] > current) {
          setCompareIndices([i, j]);
          console.log(arr[j], ">", current);
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = current;

        setTimeout(() => {
          setArr([...arr]);
        }, i * 300);
      }, i * 600);
    }
  };

  const selection = () => {
    let newArr = [...arr];
    let steps = [];
    // Generate sorting steps
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        steps.push([i, j]);
      }
    }

    steps.forEach(([i, j], index) => {
      setTimeout(() => {
        setCompareIndices([i, j]);
        if (newArr[i] > newArr[j]) {
          // Swap elements
          let temp = newArr[i];
          newArr[i] = newArr[j];
          newArr[j] = temp;

          setArr([...newArr]);
        }
      }, index * 300);
    });
  };

  return (
    <>
      {" "}
      <div
        className="container"
        style={{
          width: "100%",

          overflow: "hidden",
          padding: "30px",
        }}
      >
        <div
          className="menu"
          style={{
            backgroundColor: "black",
            padding: "30px",
            color: "cyan",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <Box>
            <Select
              onChange={(e) => {
                setAlgo(e.target.value);
              }}
              placeholder="Select algorithm"
              size="md"
            >
              <option style={{ color: "black" }} value="insertion">
                Insertion
              </option>
              <option style={{ color: "black" }} value="selection">
                Selection
              </option>
              <option style={{ color: "black" }} value="bubble">
                Bubble
              </option>
            </Select>
          </Box>
          <Box>
            <Select
              placeholder="Input size"
              onChange={(e) => {
                setSize(parseInt(e.target.value));
                setArr(generator(parseInt(e.target.value)));
              }}
            >
              <option style={{ color: "black" }} value="10">
                10
              </option>
              <option style={{ color: "black" }} value="30">
                30
              </option>
              <option style={{ color: "black" }} value="20">
                20
              </option>
            </Select>
          </Box>
          <Button
            onClick={() => {
              setArr(generator(size));
              setCompareIndices([]);
            }}
            style={{ border: " 1px solid cyan   " }}
          >
            Randomize
          </Button>
          <Button
            onClick={() => {
              if (algo == null) {
                //toaster
              } else {
                switch (algo) {
                  case "insertion":
                    insertionSort(arr, setArr, setCompareIndices);
                    break;
                  case "bubble":
                    bubbleSort(arr, setArr, setCompareIndices);
                    break;
                  case "selection":
                    selection();
                    break;
                }
              }
            }}
            style={{ border: "solid 1px cyan" }}
          >
            Sort
          </Button>
        </div>
        <div
          className="bars"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            overflowX: "auto",
          }}
        >
          <div style={{ display: "flex" }}>
            {arr.map((e, i) => (
              <Box
                key={i}
                width="30px"
                height={`${e + 20}px`}
                bg={compareIndices.includes(i) ? "red" : "cyan"}
                border="px solid white"
                textAlign="center"
                color={"black"}
                margin="2px"
                transition="background .3s"
              >
                {e}
              </Box>
            ))}
          </div>
        </div>
      </div>
      <Temp algo={algo} />
    </>
  );
}

export default App;
