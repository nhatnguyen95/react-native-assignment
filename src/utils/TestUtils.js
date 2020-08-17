/* istanbul ignore file */
import React from "react";
import { render as rtlRender } from "react-native-testing-library";
import { createStore } from "redux";
import { Provider } from "react-redux";
import homeReducer from "../core/home/reducer";

function render(
  ui,
  {
    initialState,
    store,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "react-native-testing-library";
// override render method
export { render };
