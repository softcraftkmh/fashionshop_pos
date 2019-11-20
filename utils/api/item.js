import fetch from "isomorphic-unfetch";

const url = "http://localhost:3001/api/items";

export default {
  postItem: async ({ payload }) => {
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
