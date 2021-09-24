import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import Header from "./containers/Header";
// import AppRouter from './routes';
// import { fetchDataFromApi } from "./screens/Homepage/actions";
// import configureStore from "./store/configureStore";
// import configureStore from './store/configureStore';
// import "./styles/styles.scss";

// const store = configureStore;
// store.dispatch(fetchDataFromApi());

ReactDOM.render(
  <React.StrictMode>
      <Header />
  </React.StrictMode>,
  document.getElementById("root")
);
