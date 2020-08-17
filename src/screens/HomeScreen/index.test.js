import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { render } from "utils/TestUtils";
import { trips } from "constants/MockData";
import configureStore from "redux-mock-store";
import { HomeScreen } from "./index";
import ConnectedHomeScreen from "./index";

describe("HomeScreen", () => {
  describe("Rendering", () => {
    const mockStore = configureStore([]);
    it("should match to snapshot", () => {
      const wrapper = renderer.create(<HomeScreen data={trips} />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it("should render all items in trips", () => {
      const wrapper = shallow(<HomeScreen data={trips} />);
      const flatList = wrapper.find("FlatList").props();
      expect(flatList.data.length).toBe(2);
    });

    it("should render connected app with initialState", () => {
      const store = mockStore({ home: { data: { trips } } })
      const wrapper = render(<ConnectedHomeScreen />, {store});
      const flatList = wrapper.getByTestId('flat-list');
      expect(flatList.props.data.length).toBe(2);
    });
  });

  it("getData function should be called during componentDidMount", () => {
    const getData = jest.fn();
    renderer.create(<HomeScreen getData={getData} />);
    expect(getData).toHaveBeenCalled();
  });

  describe("Navigate to other Screen", () => {
    it("should navigate to other screen when press on item", () => {
      const tripIndex = 0;
      const navigation = { navigate: jest.fn() };
      const wrapper = renderer.create(<HomeScreen navigation={navigation} />);
      wrapper.getInstance().onPressItem(tripIndex);
      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
