import fetch from "isomorphic-unfetch";

const domain = "http://localhost:3001";

export default {
  getCloudinary: async () => {
    return await (
      await fetch(domain + "/api/general/cloudinary_signature")
    ).json();
  },

  postImage: async ({ uploadUrl, formData }) => {
    return await (
      await fetch(uploadUrl, {
        method: "POST",
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        },
        body: formData
      })
    ).json();
  }
};
