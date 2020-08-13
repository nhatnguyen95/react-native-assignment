import "react-native";
import React from "react";
import { DetailScreen } from "./index";

import renderer from "react-test-renderer";

describe("DetailScreen", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const component = renderer.create(<DetailScreen />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});
