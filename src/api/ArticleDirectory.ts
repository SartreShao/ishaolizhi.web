import AV from "leancloud-storage";
import { ArticleDirectory, Article } from "./types";

export default {
  fetchArticleDirectoryList: async (includeArticleList: boolean) => {
    try {
      // 查询全部的 ArticleDirectory，按优先级 order 降序排列
      const articleDirectoryList = await new AV.Query(ArticleDirectory)
        .ascending("order")
        .find();

      if (!includeArticleList) {
        console.log("fetchArticleDirectoryList success", articleDirectoryList);
        return articleDirectoryList;
      }

      // 查询全部的 Article
      const articleList = await new AV.Query(Article)
        .containedIn("articleDirectory", articleDirectoryList)
        .addDescending("updatedAt")
        .find();

      console.log("articleList", articleList);

      // 组合 Article 与 ArticleDirectory
      articleDirectoryList.forEach(articleDirectory => {
        articleDirectory.attributes.articleListOfArticleDirectory = [];
        articleList.forEach(article => {
          if (article.attributes.articleDirectory.id === articleDirectory.id) {
            articleDirectory.attributes.articleListOfArticleDirectory.push(
              article
            );
          }
        });
      });

      console.log("fetchArticleDirectoryList success", articleDirectoryList);
      return articleDirectoryList;
    } catch (error) {
      console.log("fetchArticleDirectoryList error", error);
      throw error;
    }
  }
};
