import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CollectionItem = {
  __typename?: 'CollectionItem';
  condition?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  negotiable?: Maybe<Scalars['Boolean']['output']>;
  photo?: Maybe<Array<Photo>>;
  price?: Maybe<Scalars['Int']['output']>;
  remarks?: Maybe<Scalars['String']['output']>;
  series?: Maybe<Scalars['String']['output']>;
  sticker?: Maybe<Scalars['String']['output']>;
  stocks?: Maybe<Scalars['Int']['output']>;
};

export type Photo = {
  __typename?: 'Photo';
  id?: Maybe<Scalars['ID']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  _health?: Maybe<Scalars['Boolean']['output']>;
  collections?: Maybe<Array<CollectionItem>>;
  featured?: Maybe<Array<CollectionItem>>;
};

export type CollectionItemFragmentFragment = { __typename?: 'CollectionItem', id?: string | null, name?: string | null, series?: string | null, sticker?: string | null, condition?: string | null, remarks?: string | null, stocks?: number | null, price?: number | null, negotiable?: boolean | null, photo?: Array<{ __typename?: 'Photo', url?: string | null }> | null };

export type CollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsQuery = { __typename?: 'Query', collections?: Array<{ __typename?: 'CollectionItem', id?: string | null, name?: string | null, series?: string | null, sticker?: string | null, condition?: string | null, remarks?: string | null, stocks?: number | null, price?: number | null, negotiable?: boolean | null, photo?: Array<{ __typename?: 'Photo', url?: string | null }> | null }> | null };

export type FeaturedQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedQuery = { __typename?: 'Query', featured?: Array<{ __typename?: 'CollectionItem', id?: string | null, name?: string | null, series?: string | null, sticker?: string | null, condition?: string | null, remarks?: string | null, stocks?: number | null, price?: number | null, negotiable?: boolean | null, photo?: Array<{ __typename?: 'Photo', url?: string | null }> | null }> | null };

export const CollectionItemFragmentFragmentDoc = gql`
    fragment CollectionItemFragment on CollectionItem {
  id
  name
  series
  sticker
  condition
  remarks
  stocks
  price
  negotiable
  photo {
    url
  }
}
    `;
export const CollectionsDocument = gql`
    query collections {
  collections {
    ...CollectionItemFragment
  }
}
    ${CollectionItemFragmentFragmentDoc}`;

/**
 * __useCollectionsQuery__
 *
 * To run a query within a React component, call `useCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCollectionsQuery(baseOptions?: Apollo.QueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, options);
      }
export function useCollectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, options);
        }
export function useCollectionsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, options);
        }
export type CollectionsQueryHookResult = ReturnType<typeof useCollectionsQuery>;
export type CollectionsLazyQueryHookResult = ReturnType<typeof useCollectionsLazyQuery>;
export type CollectionsSuspenseQueryHookResult = ReturnType<typeof useCollectionsSuspenseQuery>;
export type CollectionsQueryResult = Apollo.QueryResult<CollectionsQuery, CollectionsQueryVariables>;
export const FeaturedDocument = gql`
    query featured {
  featured {
    ...CollectionItemFragment
  }
}
    ${CollectionItemFragmentFragmentDoc}`;

/**
 * __useFeaturedQuery__
 *
 * To run a query within a React component, call `useFeaturedQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeaturedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeaturedQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeaturedQuery(baseOptions?: Apollo.QueryHookOptions<FeaturedQuery, FeaturedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeaturedQuery, FeaturedQueryVariables>(FeaturedDocument, options);
      }
export function useFeaturedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeaturedQuery, FeaturedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeaturedQuery, FeaturedQueryVariables>(FeaturedDocument, options);
        }
export function useFeaturedSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FeaturedQuery, FeaturedQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FeaturedQuery, FeaturedQueryVariables>(FeaturedDocument, options);
        }
export type FeaturedQueryHookResult = ReturnType<typeof useFeaturedQuery>;
export type FeaturedLazyQueryHookResult = ReturnType<typeof useFeaturedLazyQuery>;
export type FeaturedSuspenseQueryHookResult = ReturnType<typeof useFeaturedSuspenseQuery>;
export type FeaturedQueryResult = Apollo.QueryResult<FeaturedQuery, FeaturedQueryVariables>;