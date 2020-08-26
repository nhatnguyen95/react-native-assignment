import { createSelector } from "reselect";

const selectListTrip = (state) => state.listTrip;

export const selectListTripData = createSelector(
  selectListTrip,
  (state) => state.data || {}
);

export const selectTrips = createSelector(
  selectListTripData,
  (state) => state.trips || []
);

export const selectIsLoading = createSelector(
  selectListTrip,
  (state) => state.isLoading
);