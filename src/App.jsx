import { useState } from "react";
import generator from "./utils/generator";
import { HStack, Box, Button, Select, Code } from "@chakra-ui/react";
import "./index.css";
import Temp from "./Temp";
function App() {
  const [size, setSize] = useState(30);
  const [arr, setArr] = useState(generator(size));
  const [algo, setAlgo] = useState(null);
  const [compareIndices, setCompareIndices] = useState([]);

  const bubbleSort = (arr, setArr, setCompareIndices) => {
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
          // Swap elements
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;

          setArr([...arr]);
        }
      }, index * 300);
    });
  };
  const insertionSort = () => {
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];
      let j = i - 1;
      setTimeout(() => {
        while (j >= 0 && arr[j] > current) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = current;

        setTimeout(() => {
          setArr([...arr]);
        }, i * 500);
      }, i * 1000);
    }
  };

  const simplesort = () => {
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
        style={{
          width: "100%",
          // height: "100vh",
          overflow: "hidden",
          padding: "30px",
        }}
      >
        <HStack
          className="container"
          spacing={4}
          alignItems="flex-start"
          justifyContent="center"
          style={{ backgroundColor: "black", padding: "30px", color: "cyan" }}
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
              <option style={{ color: "black" }} value="simple">
                simple
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
                  case "selection":
                    break;
                  case "bubble":
                    bubbleSort(arr, setArr, setCompareIndices);
                    break;
                  case "simple":
                    simplesort();
                    break;
                }
              }
            }}
            style={{ border: "solid 1px cyan" }}
          >
            Sort
          </Button>
        </HStack>
        <div
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
                bg={
                  compareIndices.includes(i) ? "yellowgreen" : "rgb(0, 43, 54)"
                }
                border="px solid white"
                textAlign="center"
                color={"white"}
                margin="2px"
                transition="background 0.3s"
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
