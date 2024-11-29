import api from '../util/Api';

const useApi = () => {
  const apiCall = async (config) => {
    try {
      const response = await api(config);
      return response.data;
    } catch (error) {
      if (error.response?.data?.alert === "true") {
        alert(error.response.data.message);
      } else {
        console.error('Error occurred:', error);
      }
      throw error;
    }
  };
  return apiCall;
};

export default useApi;
