import AV from "leancloud-storage";
import { Project, Tag } from "./types";

export default {
  fetchProjectList: async () => {
    try {
      const projectList = await new AV.Query(Project).ascending("order").find();
      const tagList = await new AV.Query(Tag)
        .containedIn("project", projectList)
        .find();

      projectList.forEach(project => {
        project.attributes.tagListOfProject = [];
        tagList.forEach(tag => {
          if (project.id === tag.attributes.project.id) {
            project.attributes.tagListOfProject.push(tag);
          }
        });
      });

      console.log("fetchProjectList success", projectList);
      return projectList;
    } catch (error) {
      console.log("fetchProjectList error", error);
      throw error;
    }
  }
};
