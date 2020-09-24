import Api from "./index";

export default {
  addPlan(planMast) {
    console.log(planMast)
    const addPlanMast = `
      mutation{
        addPlanMast(
          planID: "${planMast.planID}"
          name: "${planMast.name}"
          description: "${planMast.description}"
          subDescription: "${planMast.subDescription}"
          price: "${planMast.price}"
          stockNum: "${planMast.stockNum}"
          deletedAt: "${planMast.deletedAt}"
          inSale: "${planMast.inSale}"
        ){
          name
        }
      }
    `;
    return Api().post(`/?query=${encodeURIComponent(addPlanMast)}`);
  },


  updatePlan(planMast) {
    const updatePlan = `
    mutation{
      updatePlanMast(
        name: "${planMast.name}"
        planID: "${planMast.planID}"
      ){
        name
        planID
      }
    }
    `;
    return Api().post(`/?query=${encodeURIComponent(updatePlan)}`);
  },

  // 他の処理も追加可能
  fetchPlanMasts() {
    const allPlanMasts = `
    {
      allPlanMasts {
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
    return Api().post(`/?query=${encodeURIComponent(allPlanMasts)}`);
  },
  fetchPlanMast(planID) {
    const planMast = `
    {
      allPlanMasts(planID: "${planID}") {
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
    return Api().post(`/?query=${encodeURIComponent(planMast)}`);
  }
};
