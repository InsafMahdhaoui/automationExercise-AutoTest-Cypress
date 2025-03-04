const contactUsSelectors = {
  contactUsBtn: "a[href='/contact_us']",
  nameInput: "input[data-qa='name']",
  emailAdressInput: "input[data-qa='email']",
  subjectInput: "input[data-qa='subject']",
  messageInput: "[data-qa='message']",
  selectFileBtn: "input[type='file']",
  //selectFileBtn: ":nth-child(6) > .form-control",
  submitBtn: "input[data-qa='submit-button']",
  successMsg: ".status.alert.alert-success",
};
export default contactUsSelectors;
