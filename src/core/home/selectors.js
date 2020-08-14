import { createSelector } from "reselect";

const selectHome = (state) => state.home;

export const selectHomeData = createSelector(
  selectHome,
  (state) => state.data || {}
);

export const selectTrips = createSelector(
  selectHomeData,
  (state) => state.trips || []
);
