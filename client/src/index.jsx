import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const activeChainId = ChainId.Sepolia;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <ThirdwebProvider desiredChainId={activeChainId}>
          <Provider store={store}>
            <App />
          </Provider>
        </ThirdwebProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
