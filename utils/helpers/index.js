const generateCloudinaryFormData = ({ data, file }) => {
  const { key, signature, timestamp, folder } = data;
  const formData = new FormData();
  formData.append("api_key", key);
  formData.append("signature", signature);
  formData.append("timestamp", timestamp);
  formData.append("file", file);
  formData.append("folder", folder);
  return formData;
};

export default {
  generateCloudinaryFormData
};
