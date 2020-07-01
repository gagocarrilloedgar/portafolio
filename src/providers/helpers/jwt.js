export const getJWT = (prop) => {
  return JSON.parse(localStorage.getItem(prop));
};

export const getTOKEN = () => {
  return localStorage.getItem("token");
};

export const setJWT = (prop, item) => {
  localStorage.setItem(prop, JSON.stringify(item));
};

export const localStorageDB = {
  user: "user",
  userdata: "userdata",
  token: "token",
  projects: "projects",
  pTags: "projectTags",
  google: "google",
};

export const deleteJWT = () => {
  localStorage.clear();
};
