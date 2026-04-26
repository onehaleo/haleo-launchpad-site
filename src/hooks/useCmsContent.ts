import { cmsContent } from "../content/cmsData";

export const useCmsContent = () => {
  return {
    content: cmsContent,
    loading: false,
    error: null,
  };
};
