import { useState } from "react";
import "./index.css";
import { CodeBlock, irBlack } from "react-code-blocks";
import { i, se, b, comp } from "./utils/algorithms";
import { HStack, Box } from "@chakra-ui/react";
function MyCoolCodeBlock({ text, comp }) {
  return (
    <div
      className="details"
      style={{ padding: "20px", display: "flex", gap: "20px" }}
    >
      <Box
        className="shad"
        width={"100%"}
        style={{
          height: "50vh",
          overflowY: "scroll",
          borderRadius: "10px",
          border: "2px solid cyan",
        }}
      >
        <CodeBlock
          language={"c++"}
          showLineNumbers={true}
          theme={irBlack}
          text={text}
        />
      </Box>
      <Box
        className="shad"
        width={"100%"}
        style={{
          height: "50vh",
          overflowY: "scroll",
          borderRadius: "10px",
          border: "2px solid cyan",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h1
            style={{ color: "cyan", marginBottom: "10px", textAlign: "center" }}
          >
            Description
          </h1>
          <p style={{ color: "white", textAlign: "center", lineHeight: "1.5" }}>
            {comp.description}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h2 style={{ color: "cyan" }}>Best Case</h2>
              <p style={{ color: "white" }}>{comp.bestCase}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h2 style={{ color: "cyan" }}>Average Case</h2>
              <p style={{ color: "white" }}>{comp.averageCase}</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <h2 style={{ color: "cyan" }}>Worst Case</h2>
              <p style={{ color: "white" }}>{comp.worstCase}</p>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}
const Temp = ({ algo }) => {
  switch (algo) {
    case "insertion":
      return <MyCoolCodeBlock text={i} comp={comp[0]} />;

    case "bubble":
      return <MyCoolCodeBlock text={b} comp={comp[2]} />;
    case "selection":
      return <MyCoolCodeBlock text={se} comp={comp[1]} />;
    case "simple":
      return <MyCoolCodeBlock text={si} comp={comp[3]} />;
  }
};
export default Temp;
