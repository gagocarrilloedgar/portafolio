export const getJWT = (prop) => {
  return JSON.parse(localStorage.getItem(prop));
};

export const getTOKEN = () => {
  return localStorage.getItem("token");
};

export const setJWT = (prop, item) => {
  localStorage.setItem(prop, JSON.stringify(item));
};

export const localSDB = {
  user: "user",
  company: "company",
  userdata: "userdata",
  token: "token",
  projects: "projects",
  pTags: "projectTags",
  google: "google",
  firsttime: "firsttime",
  tag: "tag",
};

export const deleteJWT = () => {
  localStorage.clear();
};
