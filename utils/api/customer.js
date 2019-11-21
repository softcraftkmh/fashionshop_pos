import fetch from "isomorphic-unfetch";

const url = "http://localhost:3001/api/customers";

export default {
  getUser: async id => {
    return await (await fetch(url + "/" + id)).json();
  },

  getUsers: async () => {
    return await (await fetch(url)).json();
  },

  loginUser: async ({ payload }) => {
    return await (
      await fetch(url + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ ...payload })
      })
    ).json();
  },

  postUser: async ({ payload }) => {
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
