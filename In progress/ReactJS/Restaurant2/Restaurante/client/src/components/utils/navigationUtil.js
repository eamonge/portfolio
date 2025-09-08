let navigator;

export const setNavigator = (navFn) => {
  navigator = navFn;
};

export const navigationRoute = (url) => {
  if (navigator) {
    navigator(`${url}`);
  } else {
    console.warn("Navigator not set yet!");
  }
};