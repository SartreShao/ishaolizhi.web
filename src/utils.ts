import { Router, RouteLocationRaw } from "vue-router";

const Router = {
  replace: async (router: Router, location: RouteLocationRaw) => {
    await router.replace(location);
  },
  push: async (router: Router, location: RouteLocationRaw) => {
    await router.push(location);
  },
  back: (router: Router) => {
    router.back();
  }
};

const Time = {
  sleep: (time: number) => new Promise(resolve => setTimeout(resolve, time))
};

export { Router, Time };
