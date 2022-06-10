import { App } from "./App";
import React from "react";
import { createRoot } from "react-dom/client";

if (process.env.NODE_ENV === "development") {
    const element = document.getElementById("root");

    if (element) {
        const root = createRoot(element);

        root.render(<App />);
    }
}
