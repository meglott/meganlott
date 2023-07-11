/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCandidateInput = {
  id?: string | null,
  name: string,
  email: string,
};

export type ModelCandidateConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelCandidateConditionInput | null > | null,
  or?: Array< ModelCandidateConditionInput | null > | null,
  not?: ModelCandidateConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Candidate = {
  __typename: "Candidate",
  id: string,
  name: string,
  email: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCandidateInput = {
  id: string,
  name?: string | null,
  email?: string | null,
};

export type DeleteCandidateInput = {
  id: string,
};

export type ModelCandidateFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelCandidateFilterInput | null > | null,
  or?: Array< ModelCandidateFilterInput | null > | null,
  not?: ModelCandidateFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCandidateConnection = {
  __typename: "ModelCandidateConnection",
  items:  Array<Candidate | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCandidateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCandidateFilterInput | null > | null,
  or?: Array< ModelSubscriptionCandidateFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateCandidateMutationVariables = {
  input: CreateCandidateInput,
  condition?: ModelCandidateConditionInput | null,
};

export type CreateCandidateMutation = {
  createCandidate?:  {
    __typename: "Candidate",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCandidateMutationVariables = {
  input: UpdateCandidateInput,
  condition?: ModelCandidateConditionInput | null,
};

export type UpdateCandidateMutation = {
  updateCandidate?:  {
    __typename: "Candidate",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCandidateMutationVariables = {
  input: DeleteCandidateInput,
  condition?: ModelCandidateConditionInput | null,
};

export type DeleteCandidateMutation = {
  deleteCandidate?:  {
    __typename: "Candidate",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCandidateQueryVariables = {
  id: string,
};

export type GetCandidateQuery = {
  getCandidate?:  {
    __typename: "Candidate",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCandidatesQueryVariables = {
  filter?: ModelCandidateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCandidatesQuery = {
  listCandidates?:  {
    __typename: "ModelCandidateConnection",
    items:  Array< {
      __typename: "Candidate",
      id: string,
      name: string,
      email: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCandidateSubscriptionVariables = {
  filter?: ModelSubscriptionCandidateFilterInput | null,
};

export type OnCreateCandidateSubscription = {
  onCreateCandidate?:  {
    __typename: "Candidate",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCandidateSubscriptionVariables = {
  filter?: ModelSubscriptionCandidateFilterInput | null,
};

export type OnUpdateCandidateSubscription = {
  onUpdateCandidate?:  {
    __typename: "Candidate",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCandidateSubscriptionVariables = {
  filter?: ModelSubscriptionCandidateFilterInput | null,
};

export type OnDeleteCandidateSubscription = {
  onDeleteCandidate?:  {
    __typename: "Candidate",
    id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
