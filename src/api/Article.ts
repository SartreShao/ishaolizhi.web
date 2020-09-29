import * as AV from "leancloud-storage";

import { Article } from "./types";

export default {
  fetchArticleList: async (includeArticleDirectory: boolean) => {
    try {
      const articleList = await new AV.Query(Article)
        .include("articleDirectory")
        .descending("createdAt")
        .find();
      console.log("fetchArticleList success", articleList);
      return articleList;
    } catch (error) {
      console.log("fetchArticleList error", error);
      throw error;
    }
  }
};
