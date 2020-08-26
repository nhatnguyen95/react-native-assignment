/* istanbul ignore file */
import React from "react";
import { render as rtlRender } from "react-native-testing-library";
import { Provider } from "react-redux";


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
