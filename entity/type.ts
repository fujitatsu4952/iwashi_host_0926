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
  fetchPlanMasts: Array<PlanMast>;
  fetchPolicyMast: Array<PolicyMast>;
  fetchRoomMasts: Array<RoomMast>;
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

export type Mutation = {
  addPlanMast?: Maybe<PlanMast>;
  addPolicyMast?: Maybe<PolicyMast>;
  addRoomMast?: Maybe<RoomMast>;
  updatePlanMast?: Maybe<PlanMast>;
  updatePolicyMast?: Maybe<PolicyMast>;
  updateRoomMast?: Maybe<RoomMast>;
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


export type MutationupdatePlanMastArgs = {
  input?: Maybe<PlanMastInput>;
};


export type MutationupdatePolicyMastArgs = {
  input?: Maybe<PolicyMastInput>;
};


export type MutationupdateRoomMastArgs = {
  input?: Maybe<RoomMastInput>;
};

export type CancelPolicyMast = {
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
  planID: Scalars['String'];
  imageID?: Maybe<Scalars['String']>;
};

export type PlanImageMappingTemplateInput = {
  planID: Scalars['String'];
  imageID?: Maybe<Scalars['String']>;
};

export type PlanMast = {
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
  policyID: Scalars['ID'];
  roomChargePrice?: Maybe<Scalars['Int']>;
};

export type PolicyMastInput = {
  policyID: Scalars['ID'];
  roomChargePrice?: Maybe<Scalars['Int']>;
};

export type ReservationObject = {
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
  roomID: Scalars['String'];
  imageID?: Maybe<Scalars['String']>;
};

export type RoomImageMappingTemplateInput = {
  roomID: Scalars['String'];
  imageID?: Maybe<Scalars['String']>;
};

export type RoomMast = {
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
