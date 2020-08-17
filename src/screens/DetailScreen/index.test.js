import "react-native";
import React from "react";
import { DetailScreen } from "./index";
import renderer from "react-test-renderer";

describe("DetailScreen", () => {
  it("should match to snapshot", () => {
    const wrapper = renderer.create(<DetailScreen />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("should set trip index to state after navigating", () => {
    const route = {
      params: { tripIndex: 10 },
    };
    wrapper = renderer.create(<DetailScreen route={route} />);
    expect(wrapper.getInstance().state.tripIndex).toBe(
      route.params.tripIndex
    );
  });
});
