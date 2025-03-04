const loginSelectors = {
  signUpLoginBtn: "a[href='/login']",
  inputEmail: "input[data-qa='login-email']",
  inputPassword: "input[data-qa='login-password']",
  submitBtn: "button[data-qa='login-button']",
  actualErrorMsg:
    "#form > div > div > div.col-sm-4.col-sm-offset-1 > div > form > p",
};
export default loginSelectors;
