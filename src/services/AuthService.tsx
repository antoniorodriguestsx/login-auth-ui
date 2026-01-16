import axios from "axios";

const AUTH_API_URL = `${import.meta.env.VITE_AUTH_API_URL}`;

export const authLogin = async (email: string, password: string) => {
  try {
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return {
        success: false,
        error: "Invalid email address"
      };
    }

    if (password.length < 5) {
      return {
        success: false,
        error: "Short password"
      };
    }

    const response = await axios({
      method: 'post',
      url: `${AUTH_API_URL}/login`,
      data: { email, password }
    });

    return {
      success: true,
      data: response.data
    }
  }
  catch (error) {
    console.error(error);

    return {
      success: false,
      error: null
    };
  }
}

export const authRegister = async (name: string, email: string, password: string) => {
  try {
    if (name.length < 1) {
      return {
        success: false,
        error: "Name is required"
      };
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return {
        success: false,
        error: "Invalid email address"
      };
    }

    if (password.length < 5) {
      return {
        success: false,
        error: "Short password"
      };
    }

    const response = await axios({
      method: 'post',
      url: `${AUTH_API_URL}/register`,
      data: { name, email, password }
    });

    return {
      success: true,
      data: response.data
    }
  }
  catch (error) {
    console.error(error);

    return {
      success: false,
      error: null
    };
  }
}