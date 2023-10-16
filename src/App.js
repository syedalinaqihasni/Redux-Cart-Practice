import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store/store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Home />
        <Cart />
      </Provider>
    </>
  );
};

export default App;
