import fetch from "isomorphic-unfetch";

const url = "http://localhost:3001/api/orders";

export default {
  getOrder: async id => {
    return await (await fetch(url + "/" + id)).json();
  },

  getOrders: async () => {
    return await (await fetch(url)).json();
  },

  postOrder: async ({ payload }) => {
    return await (
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...payload })
      })
    ).json();
  }
};
