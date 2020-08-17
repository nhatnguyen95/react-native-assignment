import "react-native";
import React from "react";

import TripItem from './index';

import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { Text } from "react-native";

describe("TripItem", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const wrapper = renderer.create(<TripItem />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("press on TripItem", () => {
    it("should call onPress", () => {
      const mockOnPress = jest.fn();
      const wrapper = shallow(<TripItem onPress={mockOnPress} />);
      const onPress = wrapper.prop("onPress");
      onPress();
      expect(mockOnPress).toHaveBeenCalled();
    });
  });
  
  describe("pass id to trip", () => {
    it("should equal 10", () => {
      const wrapper = shallow(<TripItem id={10} />);
      const text = wrapper.find(Text);
      const id = text.props().children[2];
      expect(id).toBe(10);
    });
  });
  
});

