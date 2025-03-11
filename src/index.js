import './styles/global.css'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FavouritesProvider } from "./components/utils/context/FavouritesContext";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <FavouritesProvider>
    <App />
  </FavouritesProvider>
);
