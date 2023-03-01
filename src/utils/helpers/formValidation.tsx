export function validateField(fieldName: string, fieldValue: string, formValidation: any) {

  let fieldValidationErrors = formValidation.formErrors;
  let emailValid = formValidation.emailValid;
  let passwordValid = formValidation.passwordValid;

  switch (fieldName){
    case 'email':
      emailValid = fieldValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : 'Email is invalid'
      break;
    case 'password':
      passwordValid = fieldValue.length > 0;
      fieldValidationErrors.password = passwordValid ? '' : 'Password is invalid'
      break;
    default:
      break;
  }

  return { emailValid, passwordValid, fieldValidationErrors}
}