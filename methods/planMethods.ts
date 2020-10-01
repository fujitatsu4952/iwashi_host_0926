import { PlanMast, PlanMastInput, Scalars } from "@/entity/type";
import { request, GraphQLClient, gql } from "graphql-request";
import { getSdk } from "@/api/mutation";

const graphqlClient = new GraphQLClient(`http://localhost:8080`);
const sdk = getSdk(graphqlClient);
export default {
  async updatePlan(planMast: PlanMast | null) {
    await sdk.updatePlanMast({ planMast });
  },

  async addPlan(planMast: PlanMast | null) {
    const res = await sdk.addPlanMast({ planMast });
    console.log(res.data);
  },

  // 他の処理も追加可能
  async fetchPlanMasts(planID: string | null | undefined) {
    const res = await sdk.fetchPlanMasts({ planID });
    return res.data?.fetchPlanMasts;
  }
};
