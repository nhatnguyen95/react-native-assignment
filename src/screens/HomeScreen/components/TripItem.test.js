import "react-native";
import React from "react";

import TripItem from "./TripItem";

import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { Text } from "react-native";

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
    const component = shallow(<TripItem onPress={mockOnPress} />);
    const onPress = component.prop("onPress");
    onPress();
    expect(mockOnPress).toHaveBeenCalled();
  });
});

describe("Passing id to trip", () => {
  it("should equal 10", () => {
    const component = shallow(<TripItem id={10} />);
    const text = component.find(Text);
    const id = text.props().children[1];
    expect(id).toBe(10);
  });
});
