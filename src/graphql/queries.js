/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMarket = /* GraphQL */ `
  query GetMarket($id: ID!) {
    getMarket(id: $id) {
      id
      name
      products {
        items {
          id
          description
          market {
            id
            name
            tags
            owner
            createdAt
            updatedAt
          }
          file {
            bucket
            region
            key
          }
          price
          shipped
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      tags
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listMarkets = /* GraphQL */ `
  query ListMarkets(
    $filter: ModelMarketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarkets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        products {
          items {
            id
            description
            price
            shipped
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
        tags
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      description
      market {
        id
        name
        products {
          items {
            id
            description
            price
            shipped
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
        tags
        owner
        createdAt
        updatedAt
      }
      file {
        bucket
        region
        key
      }
      price
      shipped
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        market {
          id
          name
          products {
            nextToken
          }
          tags
          owner
          createdAt
          updatedAt
        }
        file {
          bucket
          region
          key
        }
        price
        shipped
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      reistered
      orders {
        items {
          id
          product {
            id
            description
            price
            shipped
            owner
            createdAt
            updatedAt
          }
          user {
            id
            username
            email
            reistered
            createdAt
            updatedAt
          }
          shipppingAddress {
            city
            country
            address_line1
            address_state
            address_zip
          }
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
export const searchMarkets = /* GraphQL */ `
  query SearchMarkets(
    $filter: SearchableMarketFilterInput
    $sort: SearchableMarketSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchMarkets(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        name
        products {
          items {
            id
            description
            price
            shipped
            owner
            createdAt
            updatedAt
          }
          nextToken
        }
        tags
        owner
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
