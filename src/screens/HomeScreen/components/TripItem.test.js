import "react-native";
import React from "react";

import TripItem from "./TripItem";

import renderer from "react-test-renderer";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("TripItem", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const component = renderer.create(<TripItem />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});

describe("Press on TripItem", () => {
  it("should call onPress", () => {
    const mockOnPress = jest.fn();
    const component = Enzyme.shallow(<TripItem onPress={mockOnPress} />);
    const onPress = component.prop('onPress');
    onPress();
    expect(mockOnPress).toHaveBeenCalled();
  });
});
