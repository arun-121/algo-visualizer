import "./index.css";
import { i, se, b, algoDescription } from "./utils/algorithms";
import MyCodeBlock from "./MyCodeBlock";

const Description = ({ algo }) => {
  return (
    <>
      <MyCodeBlock
        text={i}
        algoDescription={algoDescription[0]}
        className={algo == "insertion" ? "" : "hide"}
      />
      <MyCodeBlock
        text={b}
        algoDescription={algoDescription[2]}
        className={algo == "bubble" ? "" : "hide"}
      />
      <MyCodeBlock
        text={se}
        algoDescription={algoDescription[1]}
        className={algo == "selection" ? "" : "hide"}
      />
    </>
  );
};
export default Description;

/*
switch (algo) {
    case "insertion":
      return <MyCoolCodeBlock text={i} comp={comp[0]} />;

    case "bubble":
      return <MyCoolCodeBlock text={b} comp={comp[2]} />;
    case "selection":
      return <MyCoolCodeBlock text={se} comp={comp[1]} />;
*/
