
const baseURL = "https://portfoliowebapp.azurewebsites.net";


export const routerMain = {
  projectRouter: {
    addProject: baseURL + "/projects/add",
    uptadeProject: baseURL + "/projects/update/",
    findProjects: baseURL + "/projects/findAll",
    findProject: baseURL + "/projects/",
    findProjectByUserId: baseURL + "/projects/findBy/",
    deleteProject: baseURL + "/projects/delete/",
  },
  userRouter: {
    signup: baseURL + "/users/add",
    login: baseURL + "/users/login",
    updateUser: baseURL + "/users/update/",
    findUsers: baseURL + "/users/findAll",
    findUser: baseURL + "/users/",
    logout: baseURL + "/users/logout",
    findByURL: baseURL + "/users/public/",
    googleLogin: baseURL + "/users/google/login",
  },
};
