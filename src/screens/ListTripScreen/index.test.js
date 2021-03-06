import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { render } from "utils/TestUtils";
import { trips } from "constants/MockData";
import configureStore from "redux-mock-store";
import { ListTripScreen } from "./index";
import ConnectedListTripScreen from "./index";

describe("ListTripScreen", () => {
  describe("Rendering", () => {
    const mockStore = configureStore([]);
    it("should match to snapshot", () => {
      const wrapper = renderer.create(<ListTripScreen data={trips} />).toJSON();
      expect(wrapper).toMatchSnapshot();
    });

    it("should render all items in trips", () => {
      const wrapper = shallow(<ListTripScreen data={trips} />);
      const flatList = wrapper.find("FlatList").props();
      expect(flatList.data.length).toBe(2);
    });

    it("should render connected app with initialState", () => {
      const store = mockStore({ listTrip: { data: { trips } } })
      const wrapper = render(<ConnectedListTripScreen />, {store});
      const flatList = wrapper.getByTestId('flat-list');
      expect(flatList.props.data.length).toBe(2);
    });
  });

  it("getData function should be called during componentDidMount", () => {
    const getData = jest.fn();
    renderer.create(<ListTripScreen getData={getData} />);
    expect(getData).toHaveBeenCalled();
  });

  describe("Navigate to other Screen", () => {
    it("should navigate to other screen when press on item", () => {
      const tripIndex = 0;
      const navigation = { navigate: jest.fn() };
      const wrapper = renderer.create(<ListTripScreen navigation={navigation} />);
      wrapper.getInstance().onPressItem(tripIndex);
      expect(navigation.navigate).toHaveBeenCalled();
    });
  });
});
