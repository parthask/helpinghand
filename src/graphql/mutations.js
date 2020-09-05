/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserData = /* GraphQL */ `
  mutation CreateUserData(
    $input: CreateUserDataInput!
    $condition: ModeluserDataConditionInput
  ) {
    createUserData(input: $input, condition: $condition) {
      id
      name
      fnfEmail
      createdAt
      updatedAt
    }
  }
`;
export const updateUserData = /* GraphQL */ `
  mutation UpdateUserData(
    $input: UpdateUserDataInput!
    $condition: ModeluserDataConditionInput
  ) {
    updateUserData(input: $input, condition: $condition) {
      id
      name
      fnfEmail
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserData = /* GraphQL */ `
  mutation DeleteUserData(
    $input: DeleteUserDataInput!
    $condition: ModeluserDataConditionInput
  ) {
    deleteUserData(input: $input, condition: $condition) {
      id
      name
      fnfEmail
      createdAt
      updatedAt
    }
  }
`;
