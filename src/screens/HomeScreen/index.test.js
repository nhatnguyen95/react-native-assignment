import "react-native";
import React from "react";
import { HomeScreen } from "./index";

import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { trips } from "constants/MockData";


describe("HomeScreen", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const wrapper = renderer.create(<HomeScreen data={trips}/>).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it("should render all items in trips", () => {
      const wrapper = shallow(<HomeScreen data={trips} />);
      const flatList = wrapper.find('FlatList').props();
      expect(flatList.data.length).toBe(2);
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
      const wrapper = renderer.create(<HomeScreen navigation={navigation} />);
      wrapper.getInstance().onPressItem(tripIndex);
      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
