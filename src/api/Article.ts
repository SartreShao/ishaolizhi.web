import firebase from "firebase";
import { Article } from "./types";

const db = firebase.firestore();

export default {
  fetchArticleList: () =>
    new Promise(async (resolve, reject) => {
      try {
        const querySnapshot = await db.collection("Article").get();
        const articleList: Article[] = [];
        querySnapshot.forEach(doc => {
          const id = doc.id;
          const { title, subTitle, href, articleDirectory } = doc.data();
          console.log(doc, doc.id, doc.data());
          // articleList.push({});
        });
        console.log(articleList);
        resolve(articleList);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    })
};
