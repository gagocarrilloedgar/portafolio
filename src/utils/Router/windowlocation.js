const windowLocation = () => {
  const toMain = () => (window.location = "/");
  const toLogIn = () => (window.location = "/index/login");
  const toRegister = () => (window.location = "/index/register");
  const toUserView = (userURL) => (window.location = "/" + userURL);
  const toError = () => (window.location = "/404");
  const toTags = () => (window.location = "/index/tags");
  const toProject = (projectURL) => window.open(projectURL, "blank");
  const toContact = () => window.open("http://eepurl.com/hdwt31","blank");
  const toApp = () => (window.location = "/app");
  return {
    toMain,
    toLogIn,
    toRegister,
    toUserView,
    toUserView,
    toError,
    toTags,
    toProject,
    toApp,
    toContact,
  };
};

export default windowLocation;
