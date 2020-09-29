import { PolicyMast } from "@/entity/type";
import { GraphQLClient } from "graphql-request";
import { getSdk } from "@/api/mutation";

const graphqlClient = new GraphQLClient(`http://localhost:8080`);
const sdk = getSdk(graphqlClient);
export default {
  async updatePolicy(policyMast: PolicyMast | null) {
    await sdk.updatePolicyMast({ policyMast });
  },

  async addPolicy(policyMast: PolicyMast | null) {
    await sdk.addPolicyMast({ policyMast });
  },

  // 他の処理も追加可能
  async fetchPolicyMasts(policyID: string | null | undefined) {
    const res = await sdk.fetchPolicyMast({ policyID });
    return res.data?.fetchPolicyMast;
  }
};
