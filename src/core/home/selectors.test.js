import { trips } from "constants/MockData";
import { selectTrips, selectHomeData } from "./selectors";

describe("Home selectors", () => {
  it("should return home data", () => {
    const mockData =  { data: {trips} } ;
    const selected = selectHomeData.resultFunc(mockData);
    expect(selected).toEqual(mockData.data);
  });

  it("should return trips", () => {
    const mockData =  { trips } ;
    const selected = selectTrips.resultFunc(mockData);
    expect(selected).toEqual(mockData.trips);
  });
});
