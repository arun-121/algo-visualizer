import {
  CodeBlock,
  codepen,
  irBlack,
  railscast,
  rainbow,
  tomorrow,
  tomorrowNight,
  tomorrowNightBlue,
  tomorrowNightBright,
  tomorrowNightEighties,
} from "react-code-blocks";
import { Box } from "@chakra-ui/react";
const MyCodeBlock = ({ text, algoDescription, className }) => {
  return (
    <>
      <div
        className={"details " + className}
        style={{ padding: "20px", gap: "20px" }}
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
              style={{
                color: "cyan",
                marginBottom: "10px",
                textAlign: "center",
              }}
            >
              Description
            </h1>
            <p
              style={{ color: "white", textAlign: "center", lineHeight: "1.5" }}
            >
              {algoDescription.description}
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
                <p style={{ color: "white" }}>{algoDescription.bestCase}</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <h2 style={{ color: "cyan" }}>Average Case</h2>
                <p style={{ color: "white" }}>{algoDescription.averageCase}</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <h2 style={{ color: "cyan" }}>Worst Case</h2>
                <p style={{ color: "white" }}>{algoDescription.worstCase}</p>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default MyCodeBlock;
