import "react-native";
import React from "react";
import { DetailScreen } from "./index";

import renderer from "react-test-renderer";

describe("DetailScreen", () => {
  it("should match to snapshot", () => {
    const component = renderer.create(<DetailScreen />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it("should set trip index to state after navigating", () => {
    const route = {
      params: { tripIndex: 10 },
    };
    component = renderer.create(<DetailScreen route={route} />);
    expect(component.getInstance().state.tripIndex).toBe(
      route.params.tripIndex
    );
  });
});
