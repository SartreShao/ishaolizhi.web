import AV from "leancloud-storage";
import { Project, Tag } from "./types";

export default {
  fetchProjectList: async () => {
    try {
      const projectList = await new AV.Query(Project).find();
      const tagList = await new AV.Query(Tag)
        .containedIn("project", projectList)
        .find();

      const tagMap = new Map<string, AV.Object>();

      tagList.forEach(tag => {
        tagMap.set(tag.attributes.project.id, tag);
      });

      projectList.forEach(project => {
        project.attributes.tagListOfProject = [];
        if (tagMap.has(project.id as string)) {
          project.attributes.tagListOfProject.push(
            tagMap.get(project.id as string)
          );
        }
      });
      console.log("fetchProjectList success", projectList);
      return projectList;
    } catch (error) {
      console.log("fetchProjectList error", error);
      throw error;
    }
  }
};
