/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
          createdAt
          updatedAt
        }
        nextToken
      }
      Reviews {
        items {
          id
          CraftmanID
          Comment
          Rate
          createdAt
          updatedAt
        }
        nextToken
      }
      RviewsByUser {
        items {
          id
          CraftmanID
          Comment
          Rate
          createdAt
        }
        nextToken
      }
      createdAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        RviewsByUser {
          nextToken
        }
        createdAt
        
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      Text
      Image {
        bucket
        region
        key
      }
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
        RviewsByUser {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Text
        Image {
          bucket
          region
          key
        }
        User {
          id
          PhoneNumber
          Email
          FirstName
          LastName
          Pasword
          City
          Category
          Rating
          NumberOfUsers
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReview = /* GraphQL */ `
  query GetReview($id: ID!) {
    getReview(id: $id) {
      id
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
        RviewsByUser {
          nextToken
        }
        createdAt
        updatedAt
      }
      Reviewer {
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
        RviewsByUser {
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
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        CraftmanID
        User {
          id
          PhoneNumber
          Email
          FirstName
          LastName
          Pasword
          City
          Category
          Rating
          NumberOfUsers
          createdAt
          updatedAt
        }
        Reviewer {
          id
          PhoneNumber
          Email
          FirstName
          LastName
          Pasword
          City
          Category
          Rating
          NumberOfUsers
          createdAt
          updatedAt
        }
        Comment
        Rate
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCalender = /* GraphQL */ `
  query GetCalender($id: ID!) {
    getCalender(id: $id) {
      id
      StartTime
      EndTime
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
        RviewsByUser {
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
export const listCalenders = /* GraphQL */ `
  query ListCalenders(
    $filter: ModelCalenderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCalenders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        StartTime
        EndTime
        User {
          id
          PhoneNumber
          Email
          FirstName
          LastName
          Pasword
          City
          Category
          Rating
          NumberOfUsers
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
