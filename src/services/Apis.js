/* istanbul ignore file */
import ApiUtils from "utils/ApiUtils";
import Urls from "constants/Urls";

export const getTwoTrips = () =>
  ApiUtils.get(Urls.TWO_TRIPS);

  export const getEmptyTrip = () =>
  ApiUtils.get(Urls.EMPTY_TRIPS);

  export const getBigTrips = () =>
  ApiUtils.get(Urls.BIG_TRIPS);
