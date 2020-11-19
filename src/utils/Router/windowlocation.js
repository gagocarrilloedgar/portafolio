const windowLocation = () => {
  const toMain = () => (window.location = "/");
  const toLogIn = () => (window.location = "/index/login");
  const toRegister = () => (window.location = "/index/register");
  const toUserView = (userURL) => (window.location = "/" + userURL);
  const toError = () => (window.location = "/404");
  const toTags = () => (window.location = "/index/tags");
  const toProject = (projectURL) => window.open(projectURL, "blank");
  const toContact = () => window.open("http://eepurl.com/hdwt31", "blank");
  const toApp = () => (window.location = "/app");
  const toUser = () => (window.location = "/app/user");
  const toLearn = () => (window.location = "/app/learn");
  const toLeagues = () => (window.location = "/app/leagues");
  const toMyProjects = () => (window.location = "/app/projects");
  const toBusiness = () => (window.location = "/index/business");
  const toUserLanding = () => (window.location = "/index/user");
  const toLearnYoutube = () => (window.location = "/app/learn/channels");
  const toLearnDocs = () => (window.location = "/app/learn/docs");
  const toLearnWebs = () => (window.location = "/app/learn/webs");
  const toLearnForo = () => (window.location = "/app/learn/forums");

  return {
    toMain,
    toLogIn,
    toRegister,
    toUserView,
    toError,
    toTags,
    toProject,
    toApp,
    toContact,
    toUser,
    toLearn,
    toLeagues,
    toMyProjects,
    toBusiness,
    toUserLanding,
    toLearnYoutube,
    toLearnDocs,
    toLearnWebs,
    toLearnForo

  };
};

export default windowLocation;
