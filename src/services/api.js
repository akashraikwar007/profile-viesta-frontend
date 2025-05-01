import axios from 'axios';

const API_BASE_URL = 'https://profile-viesta-backend.onrender.com/api';

const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Authentication token not found. Please log in again.');
  }
  return {
    'Authorization': `Bearer ${token}`,
  };
};

export const api = {
  getUsers: async (params = {}) => {
    try {
      const token = localStorage.getItem('token');
      console.log('Fetching users with token:', token);
      
      const response = await axios.get(`${API_BASE_URL}/user`, {
        headers: {
          ...getAuthHeader(),
          'Content-Type': 'application/json',
        },
        params,
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      if (error.response && error.response.status === 401) {
        alert("Session expired or unauthorized. Please log in again.");
      }
      throw error;
    }
  },

  getUser: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/user/${id}`, {
        headers: getAuthHeader(),
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      if (error.response && error.response.status === 401) {
        alert("Unauthorized access. Please log in again.");
      }
      throw error;
    }
  },

  createUser: async (userData) => {
    try {
      const formData = new FormData();
      Object.entries(userData).forEach(([key, value]) => {
        if (value !== undefined) {
          formData.append(key, value);
        }
      });

      const response = await axios.post(`${API_BASE_URL}/user`, formData, {
        headers: {
          ...getAuthHeader(),
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.user;
    } catch (error) {
      console.error("Error creating user:", error);
      if (error.response && error.response.status === 401) {
        alert("Unauthorized. Please log in.");
      }
      throw error;
    }
  },

  updateUser: async (id, userData) => {
    try {
      const formData = new FormData();
      Object.entries(userData).forEach(([key, value]) => {
        if (value !== undefined) {
          formData.append(key, value);
        }
      });

      const response = await axios.patch(`${API_BASE_URL}/user/${id}`, formData, {
        headers: {
          ...getAuthHeader(),
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.user;
    } catch (error) {
      console.error("Error updating user:", error);
      if (error.response && error.response.status === 401) {
        alert("Unauthorized. Please log in.");
      }
      throw error;
    }
  },

  deleteUser: async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/user/${id}`, {
        headers: getAuthHeader(),
      });
    } catch (error) {
      console.error("Error deleting user:", error);
      if (error.response && error.response.status === 401) {
        alert("Unauthorized. Please log in.");
      }
      throw error;
    }
  },
};

