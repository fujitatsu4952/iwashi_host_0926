import Amplify from "@aws-amplify/core";
import Storage from "@aws-amplify/storage";
import Analytics from "@aws-amplify/analytics";
import "@aws-amplify/api";
import Auth from "@aws-amplify/auth";

export const awsmobile = {
  aws_project_region: "ap-northeast-1",
  Auth: {
    identityPoolId: "ap-northeast-1:7e29309e-3a86-4a60-b80d-b424fe6e0596",
    region: "ap-northeast-1",
    userPoolId: "ap-northeast-1_Vwc46lBKh",
    userPoolWebClientId: "3e1vvi9qot77jbed16rao4mlna"
  },
  Storage: {
    AWSS3: {
      bucket: "iwashimidnight1011",
      region: "ap-northeast-1",
      baseUrl: "https://d1tf0an9f7owew.cloudfront.net",
      masterBaseUrl: "https://d1tf0an9f7owew.cloudfront.net"
    }
  }
};

Amplify.configure(awsmobile);
Auth.configure(awsmobile.Auth);
Storage.configure(awsmobile.Storage);