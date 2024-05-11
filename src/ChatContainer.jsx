import { useQueryContext } from "./context/QueryContextProvider";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Text,
} from "@chakra-ui/react";
import {
  CodeBlock,
  codepen,
  irBlack,
  railscast,
  rainbow,
  googlecode,
  tomorrow,
  tomorrowNight,
  androidstudio,
  arta,
  tomorrowNightBlue,
  tomorrowNightBright,
  tomorrowNightEighties,
  xt256,
  shadesOfPurple,
  purebasic,
  zenburn,
  atomOneLight,
  ocean,
  Code,
  a11yLight,
  far,
  hopscotch,
  monokai,
  monokaiSublime,
} from "react-code-blocks";

import { useState, useRef } from "react";
import "./index.css";
import run from "./utils/chat";
const ChatContainer = () => {
  const codetheme = "zenburn";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { query, setQuery } = useQueryContext();
  const [prompt, setPrompt] = useState(null);
  const [fetching, setIsFetching] = useState(false);
  const [res, setRes] = useState([]);
  const handleQuery = () => {
    if (prompt.lenght === 0) return;
    setQuery(prompt);
    setIsFetching(true);
    run(query)
      .then((d) => setRes([d, ...res]))
      .then(() => setIsFetching(false))
      .catch(() => setIsFetching(false));
  };

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} style={{ background: "none" }}>
        <img
          className="rotating-element"
          src="gemini.png"
          width={"60px"}
          height={"60px"}
        />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Ask Gemini</DrawerHeader>

          <DrawerBody>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <Input
                variant="filled"
                placeholder="Type here..."
                onChange={(e) => setPrompt(e.target.value)}
                required={true}
                style={{ background: "#262b2b33" }}
              />
              <Button
                isDisabled={fetching}
                onClick={handleQuery}
                style={{ background: "#262b2b33" }}
              >
                Send
              </Button>
            </div>
            <div>
              {res.map((e, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "10px",
                    padding: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    src={"gemini.png"}
                    alt=""
                    width={"20px"}
                    height={"10px"}
                  />
                  <CodeBlock
                    text={e}
                    showLineNumbers={false}
                    theme={tomorrow}
                    language={"python"}
                    wrapLines
                  />
                </div>
              ))}
            </div>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
      {/* <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <h1>{query}</h1> */}
    </>
  );
};

export default ChatContainer;
