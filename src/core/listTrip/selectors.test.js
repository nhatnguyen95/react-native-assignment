import { trips } from "constants/MockData";
import { selectTrips, selectListTripData } from "./selectors";

describe("ListTrip selectors", () => {
  it("should return ListTrip data", () => {
    const mockData =  { data: {trips} } ;
    const selected = selectListTripData.resultFunc(mockData);
    expect(selected).toEqual(mockData.data);
  });

  it("should return trips", () => {
    const mockData =  { trips } ;
    const selected = selectTrips.resultFunc(mockData);
    expect(selected).toEqual(mockData.trips);
  });
});
