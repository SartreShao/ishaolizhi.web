import { useRouter, RouteLocationRaw } from "vue-router";

const Router = {
  replace: async (location: RouteLocationRaw) => {
    await useRouter().replace(location);
  },
  push: async (location: RouteLocationRaw) => {
    await useRouter().push(location);
  },
  back: () => {
    useRouter().back();
  }
};

export { Router };
