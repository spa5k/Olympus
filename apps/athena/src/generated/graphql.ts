/* eslint-disable @typescript-eslint/no-explicit-any */
import { IntrospectionQuery } from 'graphql';
import gql from 'graphql-tag';
import * as Urql from 'urql';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: any;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  count?: Maybe<SessionCountAggregate>;
  min?: Maybe<SessionMinAggregate>;
  max?: Maybe<SessionMaxAggregate>;
};

export type AggregateTokens = {
  __typename?: 'AggregateTokens';
  count?: Maybe<TokensCountAggregate>;
  min?: Maybe<TokensMinAggregate>;
  max?: Maybe<TokensMaxAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  count?: Maybe<UserCountAggregate>;
  avg?: Maybe<UserAvgAggregate>;
  sum?: Maybe<UserSumAggregate>;
  min?: Maybe<UserMinAggregate>;
  max?: Maybe<UserMaxAggregate>;
};

export type BigIntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['BigInt']>;
  increment?: Maybe<Scalars['BigInt']>;
  decrement?: Maybe<Scalars['BigInt']>;
  multiply?: Maybe<Scalars['BigInt']>;
  divide?: Maybe<Scalars['BigInt']>;
};

export type BigIntFilter = {
  equals?: Maybe<Scalars['BigInt']>;
  in?: Maybe<Array<Scalars['BigInt']>>;
  notIn?: Maybe<Array<Scalars['BigInt']>>;
  lt?: Maybe<Scalars['BigInt']>;
  lte?: Maybe<Scalars['BigInt']>;
  gt?: Maybe<Scalars['BigInt']>;
  gte?: Maybe<Scalars['BigInt']>;
  not?: Maybe<NestedBigIntFilter>;
};

export type BigIntWithAggregatesFilter = {
  equals?: Maybe<Scalars['BigInt']>;
  in?: Maybe<Array<Scalars['BigInt']>>;
  notIn?: Maybe<Array<Scalars['BigInt']>>;
  lt?: Maybe<Scalars['BigInt']>;
  lte?: Maybe<Scalars['BigInt']>;
  gt?: Maybe<Scalars['BigInt']>;
  gte?: Maybe<Scalars['BigInt']>;
  not?: Maybe<NestedBigIntWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  sum?: Maybe<NestedBigIntFilter>;
  min?: Maybe<NestedBigIntFilter>;
  max?: Maybe<NestedBigIntFilter>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedBoolFilter>;
  max?: Maybe<NestedBoolFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type DateTimeWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  max?: Maybe<NestedDateTimeFilter>;
};

export type EnumPatronageNullableFilter = {
  equals?: Maybe<Patronage>;
  in?: Maybe<Array<Patronage>>;
  notIn?: Maybe<Array<Patronage>>;
  not?: Maybe<NestedEnumPatronageNullableFilter>;
};

export type EnumPatronageNullableWithAggregatesFilter = {
  equals?: Maybe<Patronage>;
  in?: Maybe<Array<Patronage>>;
  notIn?: Maybe<Array<Patronage>>;
  not?: Maybe<NestedEnumPatronageNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedEnumPatronageNullableFilter>;
  max?: Maybe<NestedEnumPatronageNullableFilter>;
};

export type EnumTokenTypeFieldUpdateOperationsInput = {
  set?: Maybe<TokenType>;
};

export type EnumTokenTypeFilter = {
  equals?: Maybe<TokenType>;
  in?: Maybe<Array<TokenType>>;
  notIn?: Maybe<Array<TokenType>>;
  not?: Maybe<NestedEnumTokenTypeFilter>;
};

export type EnumTokenTypeWithAggregatesFilter = {
  equals?: Maybe<TokenType>;
  in?: Maybe<Array<TokenType>>;
  notIn?: Maybe<Array<TokenType>>;
  not?: Maybe<NestedEnumTokenTypeWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedEnumTokenTypeFilter>;
  max?: Maybe<NestedEnumTokenTypeFilter>;
};

export type EnumUserRoleFieldUpdateOperationsInput = {
  set?: Maybe<UserRole>;
};

export type EnumUserRoleFilter = {
  equals?: Maybe<UserRole>;
  in?: Maybe<Array<UserRole>>;
  notIn?: Maybe<Array<UserRole>>;
  not?: Maybe<NestedEnumUserRoleFilter>;
};

export type EnumUserRoleWithAggregatesFilter = {
  equals?: Maybe<UserRole>;
  in?: Maybe<Array<UserRole>>;
  notIn?: Maybe<Array<UserRole>>;
  not?: Maybe<NestedEnumUserRoleWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedEnumUserRoleFilter>;
  max?: Maybe<NestedEnumUserRoleFilter>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type IntNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  avg?: Maybe<NestedFloatNullableFilter>;
  sum?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedIntNullableFilter>;
  max?: Maybe<NestedIntNullableFilter>;
};

export type JsonFilter = {
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
};

export type JsonWithAggregatesFilter = {
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedJsonFilter>;
  max?: Maybe<NestedJsonFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createSession: Session;
  createManySession: AffectedRowsOutput;
  deleteSession?: Maybe<Session>;
  updateSession?: Maybe<Session>;
  deleteManySession: AffectedRowsOutput;
  updateManySession: AffectedRowsOutput;
  upsertSession: Session;
  createTokens: Tokens;
  createManyTokens: AffectedRowsOutput;
  deleteTokens?: Maybe<Tokens>;
  updateTokens?: Maybe<Tokens>;
  deleteManyTokens: AffectedRowsOutput;
  updateManyTokens: AffectedRowsOutput;
  upsertTokens: Tokens;
  createUser: User;
  createManyUser: AffectedRowsOutput;
  deleteUser?: Maybe<User>;
  updateUser?: Maybe<User>;
  deleteManyUser: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  upsertUser: User;
  login: UserResponse;
  register: UserResponse;
  verifyUser: Scalars['Boolean'];
  changePassword: UserResponse;
  forgetPassword: Scalars['Boolean'];
  Logout: Scalars['Boolean'];
  requestVerificationAgain: Scalars['Boolean'];
};

export type MutationCreateSessionArgs = {
  data: SessionCreateInput;
};

export type MutationCreateManySessionArgs = {
  data: Array<SessionCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationDeleteSessionArgs = {
  where: SessionWhereUniqueInput;
};

export type MutationUpdateSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};

export type MutationDeleteManySessionArgs = {
  where?: Maybe<SessionWhereInput>;
};

export type MutationUpdateManySessionArgs = {
  data: SessionUpdateManyMutationInput;
  where?: Maybe<SessionWhereInput>;
};

export type MutationUpsertSessionArgs = {
  where: SessionWhereUniqueInput;
  create: SessionCreateInput;
  update: SessionUpdateInput;
};

export type MutationCreateTokensArgs = {
  data: TokensCreateInput;
};

export type MutationCreateManyTokensArgs = {
  data: Array<TokensCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationDeleteTokensArgs = {
  where: TokensWhereUniqueInput;
};

export type MutationUpdateTokensArgs = {
  data: TokensUpdateInput;
  where: TokensWhereUniqueInput;
};

export type MutationDeleteManyTokensArgs = {
  where?: Maybe<TokensWhereInput>;
};

export type MutationUpdateManyTokensArgs = {
  data: TokensUpdateManyMutationInput;
  where?: Maybe<TokensWhereInput>;
};

export type MutationUpsertTokensArgs = {
  where: TokensWhereUniqueInput;
  create: TokensCreateInput;
  update: TokensUpdateInput;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: Maybe<Scalars['Boolean']>;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};

export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};

export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};

export type MutationLoginArgs = {
  options: UserCreateInput;
};

export type MutationRegisterArgs = {
  options: UserCreateInput;
};

export type MutationVerifyUserArgs = {
  token: Scalars['String'];
};

export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export type MutationForgetPasswordArgs = {
  email: Scalars['String'];
};

export type MutationRequestVerificationAgainArgs = {
  email: Scalars['String'];
};

export type NestedBigIntFilter = {
  equals?: Maybe<Scalars['BigInt']>;
  in?: Maybe<Array<Scalars['BigInt']>>;
  notIn?: Maybe<Array<Scalars['BigInt']>>;
  lt?: Maybe<Scalars['BigInt']>;
  lte?: Maybe<Scalars['BigInt']>;
  gt?: Maybe<Scalars['BigInt']>;
  gte?: Maybe<Scalars['BigInt']>;
  not?: Maybe<NestedBigIntFilter>;
};

export type NestedBigIntWithAggregatesFilter = {
  equals?: Maybe<Scalars['BigInt']>;
  in?: Maybe<Array<Scalars['BigInt']>>;
  notIn?: Maybe<Array<Scalars['BigInt']>>;
  lt?: Maybe<Scalars['BigInt']>;
  lte?: Maybe<Scalars['BigInt']>;
  gt?: Maybe<Scalars['BigInt']>;
  gte?: Maybe<Scalars['BigInt']>;
  not?: Maybe<NestedBigIntWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  avg?: Maybe<NestedFloatFilter>;
  sum?: Maybe<NestedBigIntFilter>;
  min?: Maybe<NestedBigIntFilter>;
  max?: Maybe<NestedBigIntFilter>;
};

export type NestedBoolFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedBoolFilter>;
  max?: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
};

export type NestedDateTimeWithAggregatesFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedDateTimeFilter>;
  max?: Maybe<NestedDateTimeFilter>;
};

export type NestedEnumPatronageNullableFilter = {
  equals?: Maybe<Patronage>;
  in?: Maybe<Array<Patronage>>;
  notIn?: Maybe<Array<Patronage>>;
  not?: Maybe<NestedEnumPatronageNullableFilter>;
};

export type NestedEnumPatronageNullableWithAggregatesFilter = {
  equals?: Maybe<Patronage>;
  in?: Maybe<Array<Patronage>>;
  notIn?: Maybe<Array<Patronage>>;
  not?: Maybe<NestedEnumPatronageNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedEnumPatronageNullableFilter>;
  max?: Maybe<NestedEnumPatronageNullableFilter>;
};

export type NestedEnumTokenTypeFilter = {
  equals?: Maybe<TokenType>;
  in?: Maybe<Array<TokenType>>;
  notIn?: Maybe<Array<TokenType>>;
  not?: Maybe<NestedEnumTokenTypeFilter>;
};

export type NestedEnumTokenTypeWithAggregatesFilter = {
  equals?: Maybe<TokenType>;
  in?: Maybe<Array<TokenType>>;
  notIn?: Maybe<Array<TokenType>>;
  not?: Maybe<NestedEnumTokenTypeWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedEnumTokenTypeFilter>;
  max?: Maybe<NestedEnumTokenTypeFilter>;
};

export type NestedEnumUserRoleFilter = {
  equals?: Maybe<UserRole>;
  in?: Maybe<Array<UserRole>>;
  notIn?: Maybe<Array<UserRole>>;
  not?: Maybe<NestedEnumUserRoleFilter>;
};

export type NestedEnumUserRoleWithAggregatesFilter = {
  equals?: Maybe<UserRole>;
  in?: Maybe<Array<UserRole>>;
  notIn?: Maybe<Array<UserRole>>;
  not?: Maybe<NestedEnumUserRoleWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedEnumUserRoleFilter>;
  max?: Maybe<NestedEnumUserRoleFilter>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
};

export type NestedFloatNullableFilter = {
  equals?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  notIn?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatNullableFilter>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
};

export type NestedIntNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  notIn?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  avg?: Maybe<NestedFloatNullableFilter>;
  sum?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedIntNullableFilter>;
  max?: Maybe<NestedIntNullableFilter>;
};

export type NestedJsonFilter = {
  equals?: Maybe<Scalars['JSON']>;
  not?: Maybe<Scalars['JSON']>;
};

export type NestedStringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  max?: Maybe<NestedStringNullableFilter>;
};

export type NestedStringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedStringFilter>;
  max?: Maybe<NestedStringFilter>;
};

export type NullableEnumPatronageFieldUpdateOperationsInput = {
  set?: Maybe<Patronage>;
};

export type NullableIntFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Int']>;
  increment?: Maybe<Scalars['Int']>;
  decrement?: Maybe<Scalars['Int']>;
  multiply?: Maybe<Scalars['Int']>;
  divide?: Maybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export enum Patronage {
  Gold = 'GOLD',
  Silver = 'SILVER',
  Copper = 'COPPER',
}

export type Query = {
  __typename?: 'Query';
  session?: Maybe<Session>;
  findFirstSession?: Maybe<Session>;
  sessions: Array<Session>;
  aggregateSession: AggregateSession;
  groupBySession: Array<SessionGroupBy>;
  findUniqueTokens?: Maybe<Tokens>;
  findFirstTokens?: Maybe<Tokens>;
  findManyTokens: Array<Tokens>;
  aggregateTokens: AggregateTokens;
  groupByTokens: Array<TokensGroupBy>;
  user?: Maybe<User>;
  findFirstUser?: Maybe<User>;
  users: Array<User>;
  aggregateUser: AggregateUser;
  groupByUser: Array<UserGroupBy>;
  me: UserResponse;
};

export type QuerySessionArgs = {
  where: SessionWhereUniqueInput;
};

export type QueryFindFirstSessionArgs = {
  where?: Maybe<SessionWhereInput>;
  orderBy?: Maybe<Array<SessionOrderByInput>>;
  cursor?: Maybe<SessionWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<SessionScalarFieldEnum>>;
};

export type QuerySessionsArgs = {
  where?: Maybe<SessionWhereInput>;
  orderBy?: Maybe<Array<SessionOrderByInput>>;
  cursor?: Maybe<SessionWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<SessionScalarFieldEnum>>;
};

export type QueryAggregateSessionArgs = {
  where?: Maybe<SessionWhereInput>;
  orderBy?: Maybe<Array<SessionOrderByInput>>;
  cursor?: Maybe<SessionWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryGroupBySessionArgs = {
  where?: Maybe<SessionWhereInput>;
  orderBy?: Maybe<Array<SessionOrderByInput>>;
  by: Array<SessionScalarFieldEnum>;
  having?: Maybe<SessionScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryFindUniqueTokensArgs = {
  where: TokensWhereUniqueInput;
};

export type QueryFindFirstTokensArgs = {
  where?: Maybe<TokensWhereInput>;
  orderBy?: Maybe<Array<TokensOrderByInput>>;
  cursor?: Maybe<TokensWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<TokensScalarFieldEnum>>;
};

export type QueryFindManyTokensArgs = {
  where?: Maybe<TokensWhereInput>;
  orderBy?: Maybe<Array<TokensOrderByInput>>;
  cursor?: Maybe<TokensWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<TokensScalarFieldEnum>>;
};

export type QueryAggregateTokensArgs = {
  where?: Maybe<TokensWhereInput>;
  orderBy?: Maybe<Array<TokensOrderByInput>>;
  cursor?: Maybe<TokensWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryGroupByTokensArgs = {
  where?: Maybe<TokensWhereInput>;
  orderBy?: Maybe<Array<TokensOrderByInput>>;
  by: Array<TokensScalarFieldEnum>;
  having?: Maybe<TokensScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryFindFirstUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
};

export type QueryAggregateUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  cursor?: Maybe<UserWhereUniqueInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export type QueryGroupByUserArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  by: Array<UserScalarFieldEnum>;
  having?: Maybe<UserScalarWhereWithAggregatesInput>;
  take?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type Session = {
  __typename?: 'Session';
  sid: Scalars['String'];
  sess: Scalars['JSON'];
  expire: Scalars['DateTime'];
};

export type SessionCountAggregate = {
  __typename?: 'SessionCountAggregate';
  sid: Scalars['Int'];
  sess: Scalars['Int'];
  expire: Scalars['Int'];
  _all: Scalars['Int'];
};

export type SessionCreateInput = {
  sid: Scalars['String'];
  sess: Scalars['JSON'];
  expire: Scalars['DateTime'];
};

export type SessionCreateManyInput = {
  sid: Scalars['String'];
  sess: Scalars['JSON'];
  expire: Scalars['DateTime'];
};

export type SessionGroupBy = {
  __typename?: 'SessionGroupBy';
  sid: Scalars['String'];
  sess: Scalars['JSON'];
  expire: Scalars['DateTime'];
  count?: Maybe<SessionCountAggregate>;
  min?: Maybe<SessionMinAggregate>;
  max?: Maybe<SessionMaxAggregate>;
};

export type SessionMaxAggregate = {
  __typename?: 'SessionMaxAggregate';
  sid?: Maybe<Scalars['String']>;
  expire?: Maybe<Scalars['DateTime']>;
};

export type SessionMinAggregate = {
  __typename?: 'SessionMinAggregate';
  sid?: Maybe<Scalars['String']>;
  expire?: Maybe<Scalars['DateTime']>;
};

export type SessionOrderByInput = {
  sid?: Maybe<SortOrder>;
  sess?: Maybe<SortOrder>;
  expire?: Maybe<SortOrder>;
};

export enum SessionScalarFieldEnum {
  Sid = 'sid',
  Sess = 'sess',
  Expire = 'expire',
}

export type SessionScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<SessionScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<SessionScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<SessionScalarWhereWithAggregatesInput>>;
  sid?: Maybe<StringWithAggregatesFilter>;
  sess?: Maybe<JsonWithAggregatesFilter>;
  expire?: Maybe<DateTimeWithAggregatesFilter>;
};

export type SessionUpdateInput = {
  sid?: Maybe<StringFieldUpdateOperationsInput>;
  sess?: Maybe<Scalars['JSON']>;
  expire?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SessionUpdateManyMutationInput = {
  sid?: Maybe<StringFieldUpdateOperationsInput>;
  sess?: Maybe<Scalars['JSON']>;
  expire?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type SessionWhereInput = {
  AND?: Maybe<Array<SessionWhereInput>>;
  OR?: Maybe<Array<SessionWhereInput>>;
  NOT?: Maybe<Array<SessionWhereInput>>;
  sid?: Maybe<StringFilter>;
  sess?: Maybe<JsonFilter>;
  expire?: Maybe<DateTimeFilter>;
};

export type SessionWhereUniqueInput = {
  sid?: Maybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableFilter>;
};

export type StringNullableWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  count?: Maybe<NestedIntNullableFilter>;
  min?: Maybe<NestedStringNullableFilter>;
  max?: Maybe<NestedStringNullableFilter>;
};

export type StringWithAggregatesFilter = {
  equals?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  notIn?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  contains?: Maybe<Scalars['String']>;
  startsWith?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  mode?: Maybe<QueryMode>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  count?: Maybe<NestedIntFilter>;
  min?: Maybe<NestedStringFilter>;
  max?: Maybe<NestedStringFilter>;
};

export enum TokenType {
  ForgetPassword = 'FORGET_PASSWORD',
  AccountVerification = 'ACCOUNT_VERIFICATION',
}

export type Tokens = {
  __typename?: 'Tokens';
  id: Scalars['String'];
  type: TokenType;
  userId: Scalars['String'];
  expire: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  token: Scalars['String'];
};

export type TokensCountAggregate = {
  __typename?: 'TokensCountAggregate';
  id: Scalars['Int'];
  type: Scalars['Int'];
  userId: Scalars['Int'];
  expire: Scalars['Int'];
  createdAt: Scalars['Int'];
  token: Scalars['Int'];
  _all: Scalars['Int'];
};

export type TokensCreateInput = {
  id?: Maybe<Scalars['String']>;
  type: TokenType;
  userId: Scalars['String'];
  expire: Scalars['DateTime'];
  createdAt?: Maybe<Scalars['DateTime']>;
  token: Scalars['String'];
};

export type TokensCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  type: TokenType;
  userId: Scalars['String'];
  expire: Scalars['DateTime'];
  createdAt?: Maybe<Scalars['DateTime']>;
  token: Scalars['String'];
};

export type TokensGroupBy = {
  __typename?: 'TokensGroupBy';
  id: Scalars['String'];
  type: TokenType;
  userId: Scalars['String'];
  expire: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  token: Scalars['String'];
  count?: Maybe<TokensCountAggregate>;
  min?: Maybe<TokensMinAggregate>;
  max?: Maybe<TokensMaxAggregate>;
};

export type TokensMaxAggregate = {
  __typename?: 'TokensMaxAggregate';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<TokenType>;
  userId?: Maybe<Scalars['String']>;
  expire?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  token?: Maybe<Scalars['String']>;
};

export type TokensMinAggregate = {
  __typename?: 'TokensMinAggregate';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<TokenType>;
  userId?: Maybe<Scalars['String']>;
  expire?: Maybe<Scalars['DateTime']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  token?: Maybe<Scalars['String']>;
};

export type TokensOrderByInput = {
  id?: Maybe<SortOrder>;
  type?: Maybe<SortOrder>;
  userId?: Maybe<SortOrder>;
  expire?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  token?: Maybe<SortOrder>;
};

export enum TokensScalarFieldEnum {
  Id = 'id',
  Type = 'type',
  UserId = 'userId',
  Expire = 'expire',
  CreatedAt = 'createdAt',
  Token = 'token',
}

export type TokensScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<TokensScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<TokensScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<TokensScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  type?: Maybe<EnumTokenTypeWithAggregatesFilter>;
  userId?: Maybe<StringWithAggregatesFilter>;
  expire?: Maybe<DateTimeWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  token?: Maybe<StringWithAggregatesFilter>;
};

export type TokensUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumTokenTypeFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
  expire?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TokensUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  type?: Maybe<EnumTokenTypeFieldUpdateOperationsInput>;
  userId?: Maybe<StringFieldUpdateOperationsInput>;
  expire?: Maybe<DateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  token?: Maybe<StringFieldUpdateOperationsInput>;
};

export type TokensWhereInput = {
  AND?: Maybe<Array<TokensWhereInput>>;
  OR?: Maybe<Array<TokensWhereInput>>;
  NOT?: Maybe<Array<TokensWhereInput>>;
  id?: Maybe<StringFilter>;
  type?: Maybe<EnumTokenTypeFilter>;
  userId?: Maybe<StringFilter>;
  expire?: Maybe<DateTimeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  token?: Maybe<StringFilter>;
};

export type TokensWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  role: UserRole;
  email: Scalars['String'];
  verified: Scalars['Boolean'];
  stripeId?: Maybe<Scalars['String']>;
  coins: Scalars['BigInt'];
  ccLast4?: Maybe<Scalars['Int']>;
  patronageType?: Maybe<Patronage>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  coins?: Maybe<Scalars['Float']>;
  ccLast4?: Maybe<Scalars['Float']>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  id: Scalars['Int'];
  createdAt: Scalars['Int'];
  updatedAt: Scalars['Int'];
  name: Scalars['Int'];
  role: Scalars['Int'];
  email: Scalars['Int'];
  password: Scalars['Int'];
  verified: Scalars['Int'];
  stripeId: Scalars['Int'];
  coins: Scalars['Int'];
  ccLast4: Scalars['Int'];
  patronageType: Scalars['Int'];
  _all: Scalars['Int'];
};

export type UserCreateInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  email: Scalars['String'];
  password: Scalars['String'];
  verified?: Maybe<Scalars['Boolean']>;
  stripeId?: Maybe<Scalars['String']>;
  coins?: Maybe<Scalars['BigInt']>;
  ccLast4?: Maybe<Scalars['Int']>;
  patronageType?: Maybe<Patronage>;
};

export type UserCreateManyInput = {
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  email: Scalars['String'];
  password: Scalars['String'];
  verified?: Maybe<Scalars['Boolean']>;
  stripeId?: Maybe<Scalars['String']>;
  coins?: Maybe<Scalars['BigInt']>;
  ccLast4?: Maybe<Scalars['Int']>;
  patronageType?: Maybe<Patronage>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  role: UserRole;
  email: Scalars['String'];
  password: Scalars['String'];
  verified: Scalars['Boolean'];
  stripeId?: Maybe<Scalars['String']>;
  coins: Scalars['BigInt'];
  ccLast4?: Maybe<Scalars['Int']>;
  patronageType?: Maybe<Patronage>;
  count?: Maybe<UserCountAggregate>;
  avg?: Maybe<UserAvgAggregate>;
  sum?: Maybe<UserSumAggregate>;
  min?: Maybe<UserMinAggregate>;
  max?: Maybe<UserMaxAggregate>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  stripeId?: Maybe<Scalars['String']>;
  coins?: Maybe<Scalars['BigInt']>;
  ccLast4?: Maybe<Scalars['Int']>;
  patronageType?: Maybe<Patronage>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<UserRole>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
  stripeId?: Maybe<Scalars['String']>;
  coins?: Maybe<Scalars['BigInt']>;
  ccLast4?: Maybe<Scalars['Int']>;
  patronageType?: Maybe<Patronage>;
};

export type UserOrderByInput = {
  id?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  role?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  verified?: Maybe<SortOrder>;
  stripeId?: Maybe<SortOrder>;
  coins?: Maybe<SortOrder>;
  ccLast4?: Maybe<SortOrder>;
  patronageType?: Maybe<SortOrder>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export enum UserRole {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  Premium = 'PREMIUM',
  Normal = 'NORMAL',
}

export enum UserScalarFieldEnum {
  Id = 'id',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  Name = 'name',
  Role = 'role',
  Email = 'email',
  Password = 'password',
  Verified = 'verified',
  StripeId = 'stripeId',
  Coins = 'coins',
  CcLast4 = 'ccLast4',
  PatronageType = 'patronageType',
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  id?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
  name?: Maybe<StringNullableWithAggregatesFilter>;
  role?: Maybe<EnumUserRoleWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  password?: Maybe<StringWithAggregatesFilter>;
  verified?: Maybe<BoolWithAggregatesFilter>;
  stripeId?: Maybe<StringNullableWithAggregatesFilter>;
  coins?: Maybe<BigIntWithAggregatesFilter>;
  ccLast4?: Maybe<IntNullableWithAggregatesFilter>;
  patronageType?: Maybe<EnumPatronageNullableWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  coins?: Maybe<Scalars['BigInt']>;
  ccLast4?: Maybe<Scalars['Int']>;
};

export type UserUpdateInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  verified?: Maybe<BoolFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  coins?: Maybe<BigIntFieldUpdateOperationsInput>;
  ccLast4?: Maybe<NullableIntFieldUpdateOperationsInput>;
  patronageType?: Maybe<NullableEnumPatronageFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  id?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  name?: Maybe<NullableStringFieldUpdateOperationsInput>;
  role?: Maybe<EnumUserRoleFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  verified?: Maybe<BoolFieldUpdateOperationsInput>;
  stripeId?: Maybe<NullableStringFieldUpdateOperationsInput>;
  coins?: Maybe<BigIntFieldUpdateOperationsInput>;
  ccLast4?: Maybe<NullableIntFieldUpdateOperationsInput>;
  patronageType?: Maybe<NullableEnumPatronageFieldUpdateOperationsInput>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  name?: Maybe<StringNullableFilter>;
  role?: Maybe<EnumUserRoleFilter>;
  email?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  verified?: Maybe<BoolFilter>;
  stripeId?: Maybe<StringNullableFilter>;
  coins?: Maybe<BigIntFilter>;
  ccLast4?: Maybe<IntNullableFilter>;
  patronageType?: Maybe<EnumPatronageNullableFilter>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'UserResponse' } & {
    errors?: Maybe<
      Array<
        { __typename?: 'FieldError' } & Pick<FieldError, 'field' | 'message'>
      >
    >;
    user?: Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'name' | 'email'>>;
  };
};

export type LogoutMutationVariables = Exact<{ [key: string]: never }>;

export type LogoutMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'Logout'
>;

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
}>;

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register: { __typename?: 'UserResponse' } & {
    errors?: Maybe<
      Array<
        { __typename?: 'FieldError' } & Pick<FieldError, 'field' | 'message'>
      >
    >;
    user?: Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'name' | 'email'>>;
  };
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = { __typename?: 'Query' } & {
  me: { __typename?: 'UserResponse' } & {
    errors?: Maybe<
      Array<
        { __typename?: 'FieldError' } & Pick<FieldError, 'field' | 'message'>
      >
    >;
    user?: Maybe<{ __typename?: 'User' } & Pick<User, 'id' | 'name'>>;
  };
};

export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(options: { email: $email, password: $password }) {
      errors {
        field
        message
      }
      user {
        id
        name
        email
      }
    }
  }
`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
}
export const LogoutDocument = gql`
  mutation Logout {
    Logout
  }
`;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument
  );
}
export const RegisterDocument = gql`
  mutation Register($email: String!, $name: String!, $password: String!) {
    register(options: { email: $email, name: $name, password: $password }) {
      errors {
        field
        message
      }
      user {
        id
        name
        email
      }
    }
  }
`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument
  );
}
export const MeDocument = gql`
  query Me {
    me {
      errors {
        field
        message
      }
      user {
        id
        name
      }
    }
  }
`;

export function useMeQuery(
  options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
}
export default ({
  __schema: {
    queryType: {
      name: 'Query',
    },
    mutationType: {
      name: 'Mutation',
    },
    subscriptionType: null,
    types: [
      {
        kind: 'OBJECT',
        name: 'AffectedRowsOutput',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AggregateSession',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'OBJECT',
              name: 'SessionCountAggregate',
            },
            args: [],
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'SessionMinAggregate',
            },
            args: [],
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'SessionMaxAggregate',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AggregateTokens',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'OBJECT',
              name: 'TokensCountAggregate',
            },
            args: [],
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'TokensMinAggregate',
            },
            args: [],
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'TokensMaxAggregate',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'AggregateUser',
        fields: [
          {
            name: 'count',
            type: {
              kind: 'OBJECT',
              name: 'UserCountAggregate',
            },
            args: [],
          },
          {
            name: 'avg',
            type: {
              kind: 'OBJECT',
              name: 'UserAvgAggregate',
            },
            args: [],
          },
          {
            name: 'sum',
            type: {
              kind: 'OBJECT',
              name: 'UserSumAggregate',
            },
            args: [],
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'UserMinAggregate',
            },
            args: [],
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'UserMaxAggregate',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'FieldError',
        fields: [
          {
            name: 'field',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'message',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Mutation',
        fields: [
          {
            name: 'createSession',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Session',
              },
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createManySession',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AffectedRowsOutput',
              },
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
              {
                name: 'skipDuplicates',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'deleteSession',
            type: {
              kind: 'OBJECT',
              name: 'Session',
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateSession',
            type: {
              kind: 'OBJECT',
              name: 'Session',
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteManySession',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AffectedRowsOutput',
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'updateManySession',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AffectedRowsOutput',
              },
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'upsertSession',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Session',
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'create',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'update',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createTokens',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Tokens',
              },
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createManyTokens',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AffectedRowsOutput',
              },
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
              {
                name: 'skipDuplicates',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'deleteTokens',
            type: {
              kind: 'OBJECT',
              name: 'Tokens',
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateTokens',
            type: {
              kind: 'OBJECT',
              name: 'Tokens',
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteManyTokens',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AffectedRowsOutput',
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'updateManyTokens',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AffectedRowsOutput',
              },
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'upsertTokens',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'Tokens',
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'create',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'update',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createUser',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'User',
              },
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'createManyUser',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AffectedRowsOutput',
              },
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
              {
                name: 'skipDuplicates',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'deleteUser',
            type: {
              kind: 'OBJECT',
              name: 'User',
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'updateUser',
            type: {
              kind: 'OBJECT',
              name: 'User',
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'deleteManyUser',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AffectedRowsOutput',
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'updateManyUser',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AffectedRowsOutput',
              },
            },
            args: [
              {
                name: 'data',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'upsertUser',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'User',
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'create',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'update',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'login',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'UserResponse',
              },
            },
            args: [
              {
                name: 'options',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'register',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'UserResponse',
              },
            },
            args: [
              {
                name: 'options',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'verifyUser',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [
              {
                name: 'token',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'changePassword',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'UserResponse',
              },
            },
            args: [
              {
                name: 'newPassword',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
              {
                name: 'token',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'forgetPassword',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [
              {
                name: 'email',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'Logout',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'requestVerificationAgain',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [
              {
                name: 'email',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Query',
        fields: [
          {
            name: 'session',
            type: {
              kind: 'OBJECT',
              name: 'Session',
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'findFirstSession',
            type: {
              kind: 'OBJECT',
              name: 'Session',
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'cursor',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'take',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'skip',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'distinct',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'sessions',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Session',
                  },
                },
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'cursor',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'take',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'skip',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'distinct',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'aggregateSession',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AggregateSession',
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'cursor',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'take',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'skip',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'groupBySession',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'SessionGroupBy',
                  },
                },
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'by',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
              {
                name: 'having',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'take',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'skip',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'findUniqueTokens',
            type: {
              kind: 'OBJECT',
              name: 'Tokens',
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'findFirstTokens',
            type: {
              kind: 'OBJECT',
              name: 'Tokens',
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'cursor',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'take',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'skip',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'distinct',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'findManyTokens',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'Tokens',
                  },
                },
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'cursor',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'take',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'skip',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'distinct',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'aggregateTokens',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AggregateTokens',
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'cursor',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'take',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'skip',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'groupByTokens',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'TokensGroupBy',
                  },
                },
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'by',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
              {
                name: 'having',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'take',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'skip',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'user',
            type: {
              kind: 'OBJECT',
              name: 'User',
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            ],
          },
          {
            name: 'findFirstUser',
            type: {
              kind: 'OBJECT',
              name: 'User',
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'cursor',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'take',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'skip',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'distinct',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'users',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'User',
                  },
                },
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'cursor',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'take',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'skip',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'distinct',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
            ],
          },
          {
            name: 'aggregateUser',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'AggregateUser',
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'cursor',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'take',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'skip',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'groupByUser',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: 'UserGroupBy',
                  },
                },
              },
            },
            args: [
              {
                name: 'where',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'orderBy',
                type: {
                  kind: 'LIST',
                  ofType: {
                    kind: 'NON_NULL',
                    ofType: {
                      kind: 'SCALAR',
                      name: 'Any',
                    },
                  },
                },
              },
              {
                name: 'by',
                type: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'LIST',
                    ofType: {
                      kind: 'NON_NULL',
                      ofType: {
                        kind: 'SCALAR',
                        name: 'Any',
                      },
                    },
                  },
                },
              },
              {
                name: 'having',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'take',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
              {
                name: 'skip',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'me',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: 'UserResponse',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Session',
        fields: [
          {
            name: 'sid',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'sess',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'expire',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'SessionCountAggregate',
        fields: [
          {
            name: 'sid',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'sess',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'expire',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: '_all',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'SessionGroupBy',
        fields: [
          {
            name: 'sid',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'sess',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'expire',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'count',
            type: {
              kind: 'OBJECT',
              name: 'SessionCountAggregate',
            },
            args: [],
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'SessionMinAggregate',
            },
            args: [],
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'SessionMaxAggregate',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'SessionMaxAggregate',
        fields: [
          {
            name: 'sid',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'expire',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'SessionMinAggregate',
        fields: [
          {
            name: 'sid',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'expire',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'Tokens',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'type',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'userId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'expire',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'token',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'TokensCountAggregate',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'type',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'userId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'expire',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'token',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: '_all',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'TokensGroupBy',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'type',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'userId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'expire',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'token',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'count',
            type: {
              kind: 'OBJECT',
              name: 'TokensCountAggregate',
            },
            args: [],
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'TokensMinAggregate',
            },
            args: [],
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'TokensMaxAggregate',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'TokensMaxAggregate',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'type',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'expire',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'token',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'TokensMinAggregate',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'type',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'userId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'expire',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'token',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'User',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'role',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'email',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'verified',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'stripeId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'coins',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'ccLast4',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'patronageType',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UserAvgAggregate',
        fields: [
          {
            name: 'coins',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'ccLast4',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UserCountAggregate',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'role',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'email',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'password',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'verified',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'stripeId',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'coins',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'ccLast4',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'patronageType',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: '_all',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UserGroupBy',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'role',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'email',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'password',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'verified',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'stripeId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'coins',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'ccLast4',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'patronageType',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'count',
            type: {
              kind: 'OBJECT',
              name: 'UserCountAggregate',
            },
            args: [],
          },
          {
            name: 'avg',
            type: {
              kind: 'OBJECT',
              name: 'UserAvgAggregate',
            },
            args: [],
          },
          {
            name: 'sum',
            type: {
              kind: 'OBJECT',
              name: 'UserSumAggregate',
            },
            args: [],
          },
          {
            name: 'min',
            type: {
              kind: 'OBJECT',
              name: 'UserMinAggregate',
            },
            args: [],
          },
          {
            name: 'max',
            type: {
              kind: 'OBJECT',
              name: 'UserMaxAggregate',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UserMaxAggregate',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'role',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'email',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'password',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'verified',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'stripeId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'coins',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'ccLast4',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'patronageType',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UserMinAggregate',
        fields: [
          {
            name: 'id',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'createdAt',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'updatedAt',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'role',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'email',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'password',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'verified',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'stripeId',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'coins',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'ccLast4',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'patronageType',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UserResponse',
        fields: [
          {
            name: 'errors',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'OBJECT',
                  name: 'FieldError',
                },
              },
            },
            args: [],
          },
          {
            name: 'user',
            type: {
              kind: 'OBJECT',
              name: 'User',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: 'UserSumAggregate',
        fields: [
          {
            name: 'coins',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'ccLast4',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: '__Schema',
        fields: [
          {
            name: 'description',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'types',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: '__Type',
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'queryType',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: '__Type',
              },
            },
            args: [],
          },
          {
            name: 'mutationType',
            type: {
              kind: 'OBJECT',
              name: '__Type',
            },
            args: [],
          },
          {
            name: 'subscriptionType',
            type: {
              kind: 'OBJECT',
              name: '__Type',
            },
            args: [],
          },
          {
            name: 'directives',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: '__Directive',
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: '__Type',
        fields: [
          {
            name: 'kind',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'name',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'description',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'specifiedByUrl',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'fields',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'OBJECT',
                  name: '__Field',
                },
              },
            },
            args: [
              {
                name: 'includeDeprecated',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'interfaces',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'OBJECT',
                  name: '__Type',
                },
              },
            },
            args: [],
          },
          {
            name: 'possibleTypes',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'OBJECT',
                  name: '__Type',
                },
              },
            },
            args: [],
          },
          {
            name: 'enumValues',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'OBJECT',
                  name: '__EnumValue',
                },
              },
            },
            args: [
              {
                name: 'includeDeprecated',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'inputFields',
            type: {
              kind: 'LIST',
              ofType: {
                kind: 'NON_NULL',
                ofType: {
                  kind: 'OBJECT',
                  name: '__InputValue',
                },
              },
            },
            args: [
              {
                name: 'includeDeprecated',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'ofType',
            type: {
              kind: 'OBJECT',
              name: '__Type',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: '__Field',
        fields: [
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'description',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'args',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: '__InputValue',
                  },
                },
              },
            },
            args: [
              {
                name: 'includeDeprecated',
                type: {
                  kind: 'SCALAR',
                  name: 'Any',
                },
              },
            ],
          },
          {
            name: 'type',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: '__Type',
              },
            },
            args: [],
          },
          {
            name: 'isDeprecated',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'deprecationReason',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: '__InputValue',
        fields: [
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'description',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'type',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'OBJECT',
                name: '__Type',
              },
            },
            args: [],
          },
          {
            name: 'defaultValue',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'isDeprecated',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'deprecationReason',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: '__EnumValue',
        fields: [
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'description',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'isDeprecated',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'deprecationReason',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'OBJECT',
        name: '__Directive',
        fields: [
          {
            name: 'name',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'description',
            type: {
              kind: 'SCALAR',
              name: 'Any',
            },
            args: [],
          },
          {
            name: 'isRepeatable',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'SCALAR',
                name: 'Any',
              },
            },
            args: [],
          },
          {
            name: 'locations',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'SCALAR',
                    name: 'Any',
                  },
                },
              },
            },
            args: [],
          },
          {
            name: 'args',
            type: {
              kind: 'NON_NULL',
              ofType: {
                kind: 'LIST',
                ofType: {
                  kind: 'NON_NULL',
                  ofType: {
                    kind: 'OBJECT',
                    name: '__InputValue',
                  },
                },
              },
            },
            args: [],
          },
        ],
        interfaces: [],
      },
      {
        kind: 'SCALAR',
        name: 'Any',
      },
    ],
    directives: [],
  },
} as unknown) as IntrospectionQuery;
