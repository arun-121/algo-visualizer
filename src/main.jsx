import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ChatContainer from "./ChatContainer.jsx";
import Test from "./Test.jsx";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import theme from "./theme";
import QueryContextProvider from "./context/QueryContextProvider.jsx";
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <QueryContextProvider>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
        transition:Bounce
      />
      <App />

      {/* <Test /> */}
      {/* <ChatContainer /> */}
    </QueryContextProvider>
  </ChakraProvider>
);
