import ApiUtils from "../utils/ApiUtils";
import { RECRUITMENT_CHALLENGE } from "../constants/Urls";

export const getRecruitmentChallenges = () =>
  ApiUtils.get(RECRUITMENT_CHALLENGE);
