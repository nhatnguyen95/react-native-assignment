import "react-native";
import React from "react";
import { HomeScreen } from "./index";

import renderer from "react-test-renderer";

describe("HomeScreen", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const component = renderer.create(<HomeScreen />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});
