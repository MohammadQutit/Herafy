/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      PhoneNumber
      Email
      FirstName
      LastName
      Pasword
      Image {
        bucket
        region
        key
      }
      City
      Category
      Rating
      NumberOfUsers
      Posts {
        items {
          id
          Text
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      Calenders {
        items {
          id
          StartTime
          EndTime
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      Reviews {
        items {
          id
          ReviewerID
          CraftmanID
          Comment
          Rate
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      PhoneNumber
      Email
      FirstName
      LastName
      Pasword
      Image {
        bucket
        region
        key
      }
      City
      Category
      Rating
      NumberOfUsers
      Posts {
        items {
          id
          Text
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      Calenders {
        items {
          id
          StartTime
          EndTime
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      Reviews {
        items {
          id
          ReviewerID
          CraftmanID
          Comment
          Rate
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      PhoneNumber
      Email
      FirstName
      LastName
      Pasword
      Image {
        bucket
        region
        key
      }
      City
      Category
      Rating
      NumberOfUsers
      Posts {
        items {
          id
          Text
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      Calenders {
        items {
          id
          StartTime
          EndTime
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      Reviews {
        items {
          id
          ReviewerID
          CraftmanID
          Comment
          Rate
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      Text
      Image {
        bucket
        region
        key
      }
      userID
      User {
        id
        PhoneNumber
        Email
        FirstName
        LastName
        Pasword
        Image {
          bucket
          region
          key
        }
        City
        Category
        Rating
        NumberOfUsers
        Posts {
          nextToken
        }
        Calenders {
          nextToken
        }
        Reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      Text
      Image {
        bucket
        region
        key
      }
      userID
      User {
        id
        PhoneNumber
        Email
        FirstName
        LastName
        Pasword
        Image {
          bucket
          region
          key
        }
        City
        Category
        Rating
        NumberOfUsers
        Posts {
          nextToken
        }
        Calenders {
          nextToken
        }
        Reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      Text
      Image {
        bucket
        region
        key
      }
      userID
      User {
        id
        PhoneNumber
        Email
        FirstName
        LastName
        Pasword
        Image {
          bucket
          region
          key
        }
        City
        Category
        Rating
        NumberOfUsers
        Posts {
          nextToken
        }
        Calenders {
          nextToken
        }
        Reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
      id
      ReviewerID
      CraftmanID
      User {
        id
        PhoneNumber
        Email
        FirstName
        LastName
        Pasword
        Image {
          bucket
          region
          key
        }
        City
        Category
        Rating
        NumberOfUsers
        Posts {
          nextToken
        }
        Calenders {
          nextToken
        }
        Reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      Comment
      Rate
      createdAt
      updatedAt
    }
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
      id
      ReviewerID
      CraftmanID
      User {
        id
        PhoneNumber
        Email
        FirstName
        LastName
        Pasword
        Image {
          bucket
          region
          key
        }
        City
        Category
        Rating
        NumberOfUsers
        Posts {
          nextToken
        }
        Calenders {
          nextToken
        }
        Reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      Comment
      Rate
      createdAt
      updatedAt
    }
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
      id
      ReviewerID
      CraftmanID
      User {
        id
        PhoneNumber
        Email
        FirstName
        LastName
        Pasword
        Image {
          bucket
          region
          key
        }
        City
        Category
        Rating
        NumberOfUsers
        Posts {
          nextToken
        }
        Calenders {
          nextToken
        }
        Reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      Comment
      Rate
      createdAt
      updatedAt
    }
  }
`;
export const createCalender = /* GraphQL */ `
  mutation CreateCalender(
    $input: CreateCalenderInput!
    $condition: ModelCalenderConditionInput
  ) {
    createCalender(input: $input, condition: $condition) {
      id
      StartTime
      EndTime
      userID
      User {
        id
        PhoneNumber
        Email
        FirstName
        LastName
        Pasword
        Image {
          bucket
          region
          key
        }
        City
        Category
        Rating
        NumberOfUsers
        Posts {
          nextToken
        }
        Calenders {
          nextToken
        }
        Reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCalender = /* GraphQL */ `
  mutation UpdateCalender(
    $input: UpdateCalenderInput!
    $condition: ModelCalenderConditionInput
  ) {
    updateCalender(input: $input, condition: $condition) {
      id
      StartTime
      EndTime
      userID
      User {
        id
        PhoneNumber
        Email
        FirstName
        LastName
        Pasword
        Image {
          bucket
          region
          key
        }
        City
        Category
        Rating
        NumberOfUsers
        Posts {
          nextToken
        }
        Calenders {
          nextToken
        }
        Reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCalender = /* GraphQL */ `
  mutation DeleteCalender(
    $input: DeleteCalenderInput!
    $condition: ModelCalenderConditionInput
  ) {
    deleteCalender(input: $input, condition: $condition) {
      id
      StartTime
      EndTime
      userID
      User {
        id
        PhoneNumber
        Email
        FirstName
        LastName
        Pasword
        Image {
          bucket
          region
          key
        }
        City
        Category
        Rating
        NumberOfUsers
        Posts {
          nextToken
        }
        Calenders {
          nextToken
        }
        Reviews {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
