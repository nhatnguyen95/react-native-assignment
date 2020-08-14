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

  it("getData function should be called during componentDidMount", () => {
    const getData = jest.fn();
    renderer.create(<HomeScreen getData={getData} />);
    expect(getData).toHaveBeenCalled();
  });

  describe("Navigate to other Screen", () => {
    it("should navigate to other screen", () => {
      const tripIndex = 0;
      const navigation = { navigate: jest.fn() };
      const component = renderer.create(<HomeScreen navigation={navigation} />);
      component.getInstance().onPressItem(tripIndex);
      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
