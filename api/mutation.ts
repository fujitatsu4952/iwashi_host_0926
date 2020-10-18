import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import { GraphQLError } from 'graphql-request/dist/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  fetchPlanMasts: Array<PlanMast>;
  fetchPolicyMast: Array<PolicyMast>;
  fetchRoomMasts: Array<RoomMast>;
  fetchS3Objects: Array<S3Object>;
};


export type QueryfetchPlanMastsArgs = {
  planID?: Maybe<Scalars['ID']>;
};


export type QueryfetchPolicyMastArgs = {
  policyID?: Maybe<Scalars['ID']>;
};


export type QueryfetchRoomMastsArgs = {
  roomID?: Maybe<Scalars['ID']>;
};


export type QueryfetchS3ObjectsArgs = {
  keyName?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addPlanMast?: Maybe<PlanMast>;
  addPolicyMast?: Maybe<PolicyMast>;
  addRoomMast?: Maybe<RoomMast>;
  addS3Object?: Maybe<S3Object>;
  updatePlanMast?: Maybe<PlanMast>;
  updatePolicyMast?: Maybe<PolicyMast>;
  updateRoomMast?: Maybe<RoomMast>;
  updateS3Object?: Maybe<S3Object>;
};


export type MutationaddPlanMastArgs = {
  input?: Maybe<PlanMastInput>;
};


export type MutationaddPolicyMastArgs = {
  input?: Maybe<PolicyMastInput>;
};


export type MutationaddRoomMastArgs = {
  input?: Maybe<RoomMastInput>;
};


export type MutationaddS3ObjectArgs = {
  input?: Maybe<S3ObjectInput>;
};


export type MutationupdatePlanMastArgs = {
  input?: Maybe<PlanMastInput>;
};


export type MutationupdatePolicyMastArgs = {
  input?: Maybe<PolicyMastInput>;
};


export type MutationupdateRoomMastArgs = {
  input?: Maybe<RoomMastInput>;
};


export type MutationupdateS3ObjectArgs = {
  input?: Maybe<S3ObjectInput>;
};

export type CancelPolicyMast = {
  __typename?: 'CancelPolicyMast';
  policyID: Scalars['ID'];
  beforeTime?: Maybe<Scalars['String']>;
  chargeRatio?: Maybe<Scalars['Int']>;
};

export type CancelPolicyMastInput = {
  policyID: Scalars['ID'];
  beforeTime?: Maybe<Scalars['String']>;
  chargeRatio?: Maybe<Scalars['Int']>;
};

export type ImageMast = {
  __typename?: 'ImageMast';
  imageID: Scalars['ID'];
  bucket: Scalars['String'];
  key: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
};

export type ImageMastInput = {
  imageID: Scalars['ID'];
  bucket: Scalars['String'];
  key: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
};

export type PlanImageMappingTemplate = {
  __typename?: 'PlanImageMappingTemplate';
  planID: Scalars['String'];
  imageID?: Maybe<Scalars['String']>;
};

export type PlanImageMappingTemplateInput = {
  planID: Scalars['String'];
  imageID?: Maybe<Scalars['String']>;
};

export type PlanMast = {
  __typename?: 'PlanMast';
  planID: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  subDescription: Scalars['String'];
  price: Scalars['Int'];
  stockNum: Scalars['Int'];
  deletedAt?: Maybe<Scalars['String']>;
  inSale?: Maybe<Scalars['Boolean']>;
};

export type PlanMastInput = {
  planID: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  subDescription?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  stockNum: Scalars['Int'];
  deletedAt?: Maybe<Scalars['String']>;
  inSale?: Maybe<Scalars['Boolean']>;
};

export type PlanStatus = {
  __typename?: 'PlanStatus';
  planID: Scalars['ID'];
  Time: Scalars['String'];
  soldNum?: Maybe<Scalars['Int']>;
  availableNum?: Maybe<Scalars['Int']>;
  isAvailabe?: Maybe<Scalars['Boolean']>;
};

export type PlanStatusInput = {
  planID: Scalars['ID'];
  Time: Scalars['String'];
  soldNum?: Maybe<Scalars['Int']>;
  availableNum?: Maybe<Scalars['Int']>;
  isAvailabe?: Maybe<Scalars['Boolean']>;
};

export type PolicyMast = {
  __typename?: 'PolicyMast';
  policyID: Scalars['ID'];
  roomChargePrice?: Maybe<Scalars['Int']>;
};

export type PolicyMastInput = {
  policyID: Scalars['ID'];
  roomChargePrice?: Maybe<Scalars['Int']>;
};

export type ReservationObject = {
  __typename?: 'ReservationObject';
  reservationID: Scalars['String'];
  checkInTime: Scalars['String'];
  checkOutTime: Scalars['String'];
  roomNum: Scalars['Int'];
  planNum: Scalars['Int'];
  peopleNum: Scalars['Int'];
  totalPrice: Scalars['Int'];
  guestName: Scalars['String'];
  guestEmail: Scalars['String'];
  GuestTell: Scalars['String'];
  canceledAt?: Maybe<Scalars['String']>;
  policyID: Scalars['String'];
};

export type ReservationObjectInput = {
  reservationID: Scalars['String'];
  checkInTime: Scalars['String'];
  checkOutTime: Scalars['String'];
  roomNum: Scalars['Int'];
  planNum: Scalars['Int'];
  peopleNum: Scalars['Int'];
  totalPrice: Scalars['Int'];
  guestName: Scalars['String'];
  guestEmail: Scalars['String'];
  GuestTell: Scalars['String'];
  canceledAt?: Maybe<Scalars['String']>;
  policyID: Scalars['String'];
};

export type ReservationPlanInfo = {
  __typename?: 'ReservationPlanInfo';
  reservationID: Scalars['String'];
  planID: Scalars['String'];
  name: Scalars['String'];
  amount: Scalars['String'];
  price: Scalars['String'];
};

export type ReservationPlanInfoInput = {
  reservationID: Scalars['String'];
  planID: Scalars['String'];
  name: Scalars['String'];
  amount: Scalars['String'];
  price: Scalars['String'];
};

export type ReservationRoomInfo = {
  __typename?: 'ReservationRoomInfo';
  reservationID: Scalars['String'];
  roomID: Scalars['String'];
  name: Scalars['String'];
  amount: Scalars['String'];
  price: Scalars['String'];
};

export type ReservationRoomInfoInput = {
  reservationID: Scalars['String'];
  roomID: Scalars['String'];
  name: Scalars['String'];
  amount: Scalars['String'];
  price: Scalars['String'];
};

export type RoomImageMappingTemplate = {
  __typename?: 'RoomImageMappingTemplate';
  roomID: Scalars['String'];
  imageID?: Maybe<Scalars['String']>;
};

export type RoomImageMappingTemplateInput = {
  roomID: Scalars['String'];
  imageID?: Maybe<Scalars['String']>;
};

export type RoomMast = {
  __typename?: 'RoomMast';
  roomID: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  subDescription: Scalars['String'];
  maxPeopleNum: Scalars['Int'];
  stockNum: Scalars['Int'];
  minOrderNum: Scalars['Int'];
  deletedAt?: Maybe<Scalars['String']>;
  inSale?: Maybe<Scalars['Boolean']>;
};

export type RoomMastInput = {
  roomID: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  subDescription: Scalars['String'];
  maxPeopleNum: Scalars['Int'];
  stockNum: Scalars['Int'];
  minOrderNum: Scalars['Int'];
  deletedAt?: Maybe<Scalars['String']>;
  inSale?: Maybe<Scalars['Boolean']>;
};

export type RoomStatus = {
  __typename?: 'RoomStatus';
  roomID: Scalars['ID'];
  Time: Scalars['String'];
  soldNum?: Maybe<Scalars['Int']>;
  availableNum?: Maybe<Scalars['Int']>;
  isAvailabe?: Maybe<Scalars['Boolean']>;
};

export type RoomStatusInput = {
  roomID: Scalars['ID'];
  Time: Scalars['String'];
  soldNum?: Maybe<Scalars['Int']>;
  availableNum?: Maybe<Scalars['Int']>;
  isAvailabe?: Maybe<Scalars['Boolean']>;
};

export type S3Object = {
  __typename?: 'S3Object';
  bucket?: Maybe<Scalars['String']>;
  keyName: Scalars['String'];
  region: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
};

export type S3ObjectInput = {
  bucket?: Maybe<Scalars['String']>;
  keyName: Scalars['String'];
  region: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
};

export type updatePlanMastMutationVariables = Exact<{
  planMast?: Maybe<PlanMastInput>;
}>;


export type updatePlanMastMutation = (
  { __typename?: 'Mutation' }
  & { updatePlanMast?: Maybe<(
    { __typename?: 'PlanMast' }
    & Pick<PlanMast, 'name'>
  )> }
);

export type addPlanMastMutationVariables = Exact<{
  planMast?: Maybe<PlanMastInput>;
}>;


export type addPlanMastMutation = (
  { __typename?: 'Mutation' }
  & { addPlanMast?: Maybe<(
    { __typename?: 'PlanMast' }
    & Pick<PlanMast, 'planID' | 'name' | 'description' | 'subDescription' | 'price' | 'stockNum' | 'deletedAt' | 'inSale'>
  )> }
);

export type fetchPlanMastsQueryVariables = Exact<{
  planID?: Maybe<Scalars['ID']>;
}>;


export type fetchPlanMastsQuery = (
  { __typename?: 'Query' }
  & { fetchPlanMasts: Array<(
    { __typename?: 'PlanMast' }
    & Pick<PlanMast, 'planID' | 'name' | 'description' | 'subDescription' | 'price' | 'stockNum' | 'deletedAt' | 'inSale'>
  )> }
);

export type updatePolicyMastMutationVariables = Exact<{
  policyMast?: Maybe<PolicyMastInput>;
}>;


export type updatePolicyMastMutation = (
  { __typename?: 'Mutation' }
  & { updatePolicyMast?: Maybe<(
    { __typename?: 'PolicyMast' }
    & Pick<PolicyMast, 'policyID'>
  )> }
);

export type addPolicyMastMutationVariables = Exact<{
  policyMast?: Maybe<PolicyMastInput>;
}>;


export type addPolicyMastMutation = (
  { __typename?: 'Mutation' }
  & { addPolicyMast?: Maybe<(
    { __typename?: 'PolicyMast' }
    & Pick<PolicyMast, 'policyID'>
  )> }
);

export type fetchPolicyMastQueryVariables = Exact<{
  policyID?: Maybe<Scalars['ID']>;
}>;


export type fetchPolicyMastQuery = (
  { __typename?: 'Query' }
  & { fetchPolicyMast: Array<(
    { __typename?: 'PolicyMast' }
    & Pick<PolicyMast, 'policyID' | 'roomChargePrice'>
  )> }
);

export type updateRoomMastMutationVariables = Exact<{
  roomMast?: Maybe<RoomMastInput>;
}>;


export type updateRoomMastMutation = (
  { __typename?: 'Mutation' }
  & { updateRoomMast?: Maybe<(
    { __typename?: 'RoomMast' }
    & Pick<RoomMast, 'name'>
  )> }
);

export type addRoomMastMutationVariables = Exact<{
  roomMast?: Maybe<RoomMastInput>;
}>;


export type addRoomMastMutation = (
  { __typename?: 'Mutation' }
  & { addRoomMast?: Maybe<(
    { __typename?: 'RoomMast' }
    & Pick<RoomMast, 'name'>
  )> }
);

export type fetchRoomMastsQueryVariables = Exact<{
  roomID?: Maybe<Scalars['ID']>;
}>;


export type fetchRoomMastsQuery = (
  { __typename?: 'Query' }
  & { fetchRoomMasts: Array<(
    { __typename?: 'RoomMast' }
    & Pick<RoomMast, 'roomID' | 'name' | 'description' | 'subDescription' | 'maxPeopleNum' | 'stockNum' | 'minOrderNum' | 'deletedAt' | 'inSale'>
  )> }
);

export type updateS3ObjectMutationVariables = Exact<{
  s3Object?: Maybe<S3ObjectInput>;
}>;


export type updateS3ObjectMutation = (
  { __typename?: 'Mutation' }
  & { updateS3Object?: Maybe<(
    { __typename?: 'S3Object' }
    & Pick<S3Object, 'bucket'>
  )> }
);

export type addS3ObjectMutationVariables = Exact<{
  s3Object?: Maybe<S3ObjectInput>;
}>;


export type addS3ObjectMutation = (
  { __typename?: 'Mutation' }
  & { addS3Object?: Maybe<(
    { __typename?: 'S3Object' }
    & Pick<S3Object, 'bucket' | 'keyName' | 'region' | 'mimeType' | 'fileName'>
  )> }
);

export type fetchS3ObjectsQueryVariables = Exact<{
  keyName?: Maybe<Scalars['String']>;
}>;


export type fetchS3ObjectsQuery = (
  { __typename?: 'Query' }
  & { fetchS3Objects: Array<(
    { __typename?: 'S3Object' }
    & Pick<S3Object, 'bucket' | 'keyName' | 'region' | 'mimeType' | 'fileName'>
  )> }
);


export const updatePlanMastDocument = gql`
    mutation updatePlanMast($planMast: PlanMastInput) {
  updatePlanMast(input: $planMast) {
    name
  }
}
    `;
export const addPlanMastDocument = gql`
    mutation addPlanMast($planMast: PlanMastInput) {
  addPlanMast(input: $planMast) {
    planID
    name
    description
    subDescription
    price
    stockNum
    deletedAt
    inSale
  }
}
    `;
export const fetchPlanMastsDocument = gql`
    query fetchPlanMasts($planID: ID) {
  fetchPlanMasts(planID: $planID) {
    planID
    name
    description
    subDescription
    price
    stockNum
    deletedAt
    inSale
  }
}
    `;
export const updatePolicyMastDocument = gql`
    mutation updatePolicyMast($policyMast: PolicyMastInput) {
  updatePolicyMast(input: $policyMast) {
    policyID
  }
}
    `;
export const addPolicyMastDocument = gql`
    mutation addPolicyMast($policyMast: PolicyMastInput) {
  addPolicyMast(input: $policyMast) {
    policyID
  }
}
    `;
export const fetchPolicyMastDocument = gql`
    query fetchPolicyMast($policyID: ID) {
  fetchPolicyMast(policyID: $policyID) {
    policyID
    roomChargePrice
  }
}
    `;
export const updateRoomMastDocument = gql`
    mutation updateRoomMast($roomMast: RoomMastInput) {
  updateRoomMast(input: $roomMast) {
    name
  }
}
    `;
export const addRoomMastDocument = gql`
    mutation addRoomMast($roomMast: RoomMastInput) {
  addRoomMast(input: $roomMast) {
    name
  }
}
    `;
export const fetchRoomMastsDocument = gql`
    query fetchRoomMasts($roomID: ID) {
  fetchRoomMasts(roomID: $roomID) {
    roomID
    name
    description
    subDescription
    maxPeopleNum
    stockNum
    minOrderNum
    deletedAt
    inSale
  }
}
    `;
export const updateS3ObjectDocument = gql`
    mutation updateS3Object($s3Object: S3ObjectInput) {
  updateS3Object(input: $s3Object) {
    bucket
  }
}
    `;
export const addS3ObjectDocument = gql`
    mutation addS3Object($s3Object: S3ObjectInput) {
  addS3Object(input: $s3Object) {
    bucket
    keyName
    region
    mimeType
    fileName
  }
}
    `;
export const fetchS3ObjectsDocument = gql`
    query fetchS3Objects($keyName: String) {
  fetchS3Objects(keyName: $keyName) {
    bucket
    keyName
    region
    mimeType
    fileName
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    updatePlanMast(variables?: updatePlanMastMutationVariables): Promise<{ data?: updatePlanMastMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<updatePlanMastMutation>(print(updatePlanMastDocument), variables));
    },
    addPlanMast(variables?: addPlanMastMutationVariables): Promise<{ data?: addPlanMastMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<addPlanMastMutation>(print(addPlanMastDocument), variables));
    },
    fetchPlanMasts(variables?: fetchPlanMastsQueryVariables): Promise<{ data?: fetchPlanMastsQuery | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<fetchPlanMastsQuery>(print(fetchPlanMastsDocument), variables));
    },
    updatePolicyMast(variables?: updatePolicyMastMutationVariables): Promise<{ data?: updatePolicyMastMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<updatePolicyMastMutation>(print(updatePolicyMastDocument), variables));
    },
    addPolicyMast(variables?: addPolicyMastMutationVariables): Promise<{ data?: addPolicyMastMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<addPolicyMastMutation>(print(addPolicyMastDocument), variables));
    },
    fetchPolicyMast(variables?: fetchPolicyMastQueryVariables): Promise<{ data?: fetchPolicyMastQuery | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<fetchPolicyMastQuery>(print(fetchPolicyMastDocument), variables));
    },
    updateRoomMast(variables?: updateRoomMastMutationVariables): Promise<{ data?: updateRoomMastMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<updateRoomMastMutation>(print(updateRoomMastDocument), variables));
    },
    addRoomMast(variables?: addRoomMastMutationVariables): Promise<{ data?: addRoomMastMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<addRoomMastMutation>(print(addRoomMastDocument), variables));
    },
    fetchRoomMasts(variables?: fetchRoomMastsQueryVariables): Promise<{ data?: fetchRoomMastsQuery | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<fetchRoomMastsQuery>(print(fetchRoomMastsDocument), variables));
    },
    updateS3Object(variables?: updateS3ObjectMutationVariables): Promise<{ data?: updateS3ObjectMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<updateS3ObjectMutation>(print(updateS3ObjectDocument), variables));
    },
    addS3Object(variables?: addS3ObjectMutationVariables): Promise<{ data?: addS3ObjectMutation | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<addS3ObjectMutation>(print(addS3ObjectDocument), variables));
    },
    fetchS3Objects(variables?: fetchS3ObjectsQueryVariables): Promise<{ data?: fetchS3ObjectsQuery | undefined; extensions?: any; headers: Headers; status: number; errors?: GraphQLError[] | undefined; }> {
        return withWrapper(() => client.rawRequest<fetchS3ObjectsQuery>(print(fetchS3ObjectsDocument), variables));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;