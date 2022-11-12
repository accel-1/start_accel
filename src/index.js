import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './App.scss'
import ScrollToTop from "./ScrollToTop";
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

const root = ReactDOM.createRoot(document.getElementById("root"));
const activeChainId = ChainId.Mumbai;
root.render(
    <React.Fragment>
        <BrowserRouter>
            <ScrollToTop />
            <ThirdwebProvider desiredChainId={activeChainId} >
            <App />
            </ThirdwebProvider>
            
        </BrowserRouter>
    </React.Fragment>
);

