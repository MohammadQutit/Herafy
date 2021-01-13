/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateReview = /* GraphQL */ `
  subscription OnCreateReview {
    onCreateReview {
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
export const onUpdateReview = /* GraphQL */ `
  subscription OnUpdateReview {
    onUpdateReview {
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
export const onDeleteReview = /* GraphQL */ `
  subscription OnDeleteReview {
    onDeleteReview {
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
export const onCreateCalender = /* GraphQL */ `
  subscription OnCreateCalender {
    onCreateCalender {
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
export const onUpdateCalender = /* GraphQL */ `
  subscription OnUpdateCalender {
    onUpdateCalender {
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
export const onDeleteCalender = /* GraphQL */ `
  subscription OnDeleteCalender {
    onDeleteCalender {
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
