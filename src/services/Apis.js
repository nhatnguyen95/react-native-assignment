import ApiUtils from "utils/ApiUtils";
import Urls from "constants/Urls";

export const getRecruitmentChallenges = () =>
  ApiUtils.get(Urls.RECRUITMENT_CHALLENGE);
