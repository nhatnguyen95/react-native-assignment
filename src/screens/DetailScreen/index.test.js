import "react-native";
import React from "react";
import { render } from "../../utils/TestUtils";
import { trips } from "constants/MockData";
import configureStore from "redux-mock-store";
import { DetailScreen } from "./index";
import ConnectedDetailScreen from "./index";
import renderer from "react-test-renderer";

describe("DetailScreen", () => {
  const mockStore = configureStore([]);
  it("should match to snapshot", () => {
    const wrapper = renderer.create(<DetailScreen />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("should set trip index to state after navigated", () => {
    const route = {
      params: { tripIndex: 10 },
    };
    wrapper = renderer.create(<DetailScreen route={route} />);
    expect(wrapper.getInstance().state.tripIndex).toBe(
      route.params.tripIndex
    );
  });

  it("should render connected app with initialState", () => {
    const store = mockStore({ home: { data: { trips } } })
    const navigation = { route:{ params: { tripIndex: 0}} };
    const wrapper = render(<ConnectedDetailScreen navigation={navigation}/>, {store});
    const tripContainer = wrapper.getByTestId('trip-view');
    expect(tripContainer.props.trips.length).toBe(2);
  });
});
