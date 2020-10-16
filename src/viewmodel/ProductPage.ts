import * as Api from "@/api";
import AV from "leancloud-storage";
import { Ref } from "vue";

export default {
  fetchProjectList: async (projectList: Ref<AV.Object[]>) => {
    projectList.value = await Api.Project.fetchProjectList();
  }
};
