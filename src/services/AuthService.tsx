import axios from "axios";

const AUTH_API_URL: string = `${import.meta.env.AUTH_API_URL}`;

export const authLogin = async (email: string, password: string) => {
  try {
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return {
        success: false,
        error: "Invalid email address"
      };
    }
  }
  catch (error) {
    console.error(error);
  }
}