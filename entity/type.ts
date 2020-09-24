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

export type CancelPolicyMast = {
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

export type PlanImageMappingTemplate = {
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
  inSale?: Maybe<Scalars['String']>;
};

export type PlanStatus = {
  planID: Scalars['ID'];
  Time: Scalars['String'];
  soldNum?: Maybe<Scalars['Int']>;
  availableNum?: Maybe<Scalars['Int']>;
  isAvailabe?: Maybe<Scalars['Boolean']>;
};

export type PolicyMast = {
  policyID: Scalars['ID'];
  roomChargePrice?: Maybe<Scalars['String']>;
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

export type ReservationPlanInfo = {
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

export type RoomImageMappingTemplate = {
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

export type RoomStatus = {
  roomID: Scalars['ID'];
  Time: Scalars['String'];
  soldNum?: Maybe<Scalars['Int']>;
  availableNum?: Maybe<Scalars['Int']>;
  isAvailabe?: Maybe<Scalars['Boolean']>;
};
