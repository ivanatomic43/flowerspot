export function validateField(fieldName: string, fieldValue: string, formValidation: any) {

  let fieldValidationErrors = formValidation.formErrors
  let firstNameValid = formValidation.firstNameValid
  let lastNameValid = formValidation.lastNameValid
  let dateOfBirthValid = formValidation.dateOfBirth
  let emailValid = formValidation.emailValid
  let passwordValid = formValidation.passwordValid

  switch (fieldName){
    case 'firstName':
      firstNameValid = fieldValue.length > 0
      fieldValidationErrors.firstName = firstNameValid ? '' : 'Please enter a valid first name'
      break;
    case 'lastName':
      lastNameValid = fieldValue.length > 0
      fieldValidationErrors.lastName = lastNameValid ? '' : 'Please enter a valid last name'
      break;
    case 'dateOfBirth':
      dateOfBirthValid = fieldValue.length > 0
      fieldValidationErrors.dateOfBirth = dateOfBirthValid ? '' : 'Please enter a valid date of birth'
      break;
    case 'email':
      emailValid = fieldValue.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      fieldValidationErrors.email = emailValid ? '' : 'Email is invalid'
      break;
    case 'password':
      passwordValid = fieldValue.length > 3;
      fieldValidationErrors.password = passwordValid ? '' : 'Password is invalid'
      break;
    default:
      break;
  }

  return { firstNameValid, lastNameValid, dateOfBirthValid, emailValid, passwordValid, fieldValidationErrors}
}