export const getHttpCodeError = (errors) => {
  if (errors && errors.graphQLErrors && errors.graphQLErrors.length > 0) {
    return errors.graphQLErrors[0].status || 500
  }
  return 500
}
