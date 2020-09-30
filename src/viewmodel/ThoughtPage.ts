import * as Api from "@/api";
import AV from "leancloud-storage";
import { Ref } from "vue";

export default {
  init: async (articleDirectoryList: Ref<AV.Object[]>) => {
    articleDirectoryList.value = await Api.ArticleDirectory.fetchArticleDirectoryList(
      true
    );
  }
};
