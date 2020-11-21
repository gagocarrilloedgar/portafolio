const baseURL = process.env.REACT_APP_BASE_URL;

const routerMain = {
  projectRouter: {
    addProject: baseURL + "/projects/add",
    uptadeProject: baseURL + "/projects/update/",
    findProjects: baseURL + "/projects/findAll",
    findProject: baseURL + "/projects/",
    findProjectByUserId: baseURL + "/projects/findBy/",
    deleteProject: baseURL + "/projects/delete/",
    getProjectsByTag: baseURL + "/projects/getBytags",
  },
  reviewsRouter: {
    addReview: baseURL + "/reviews/add",
    updateReview: baseURL + "/reviews/update/",
    findReview: baseURL + "/reviews/",
    findReviewByUserId: baseURL + "/reviews/findBy/",
    deleteProject: baseURL + "/reviews/delete/",
  },
  experienceRouter: {
    addExperience: baseURL + "/experiences/add",
    uptadeExperience: baseURL + "/experiences/update/",
    findExperience: baseURL + "/experiences/",
    findExperienceByUserId: baseURL + "/experiences/findBy/",
    deleteExperience: baseURL + "/experiences/delete/",
  },
  studiesRouter: {
    addStudy: baseURL + "/studies/add",
    uptadeStudy: baseURL + "/studies/update/",
    findStudy: baseURL + "/studies/",
    findStudyByUserId: baseURL + "/studies/findBy/",
    deleteStudy: baseURL + "/studies/delete/",
  },
  userRouter: {
    signup: baseURL + "/users/add",
    login: baseURL + "/users/login",
    updateUser: baseURL + "/users/update/",
    findUsers: baseURL + "/users/findAll",
    findUser: baseURL + "/user/",
    logout: baseURL + "/users/logout",
    findByURL: baseURL + "/users/public/",
    googleLogin: baseURL + "/users/google/login",
    getAllUsersByIds: baseURL + "/users/findAllById",
    updateURL: baseURL + "/users/updatePersonalURL/",
  },
  companyRouter: {
    signup: baseURL + "/companies/add",
    login: baseURL + "/companies/login",
    update: baseURL + "/companies/update/",
    findAll: baseURL + "/companies/findAll",
    findById: baseURL + "/companies/",
    logout: baseURL + "/companies/logout",
    findByURL: baseURL + "/companies/public/",
    googleLogin: baseURL + "/companies/google/login",
    getCompaniesByIds: baseURL + "/companies/findAllById",
    updateCompanyURL: baseURL + "/companies/updateurl/",
  },

};

export default routerMain;
