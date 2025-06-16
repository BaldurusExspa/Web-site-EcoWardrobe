import { api } from "./config";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  name: string;
  mobilePhone: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, mobilePhone: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCurrentUser = async (token: string) => {
    try {
      const response = await api.get("/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (!response.data.user) {
        throw new Error("User data not found in response");
      }
      
      return response.data.user;
    } catch (error) {
      console.error("Failed to fetch user data:", error);
      logout();
      throw error;
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem("token");
      
      if (storedToken) {
        try {
          const userData = await fetchCurrentUser(storedToken);
          setUser(userData);
          setToken(storedToken);
        } catch (error) {
          console.error("Authentication initialization failed:", error);
          localStorage.removeItem("token");
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await api.post("/authorization", { email, password });
      
      if (!response.data.token) {
        throw new Error("Token not received from server");
      }
      
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      
      const userData = await fetchCurrentUser(response.data.token);
      setUser(userData);
    } catch (error) {
      console.error("Login failed:", error);
      logout();
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, mobilePhone: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await api.post("/registration", { name, mobilePhone, email, password });
      
      if (!response.data.token) {
        throw new Error("Token not received from server");
      }
      
      localStorage.setItem("token", response.data.token);
      setToken(response.data.token);
      
      const userData = await fetchCurrentUser(response.data.token);
      setUser(userData);
    } catch (error) {
      console.error("Registration failed:", error);
      logout();
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  const value = {
    user,
    token,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};