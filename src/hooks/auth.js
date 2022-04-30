import React, { createContext, useContext, useState } from "react";

import api from "../services/api";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    birthdate: "",
    gender: "",
    authorization: "",
  });

  async function handleSignIn() {
    const acesso = {
      email: "desafio@ioasys.com.br",
      password: "12341234",
    };
    
    try {
      const response = await api.post("/auth/sign-in", acesso);
      console.log("Response", response);
      console.log("STATUS", response.status);

      if (response.status === 200) {
        setUser({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          birthdate: response.data.birthdate,
          gender: response.data.gender,
          authorization: response.headers.authorization,
        });
        localStorage.setItem("@desafioBooks", response.headers.authorization);     
      }

      if (response.status === 401 || response.status === 500) {
        const refreshResponse = await api.post("/auth/refresh-token", acesso);

        if (refreshResponse.status === 204) {
          setUser({
            id: refreshResponse.data.id,
            name: refreshResponse.data.name,
            email: refreshResponse.data.email,
            birthdate: refreshResponse.data.birthdate,
            gender: refreshResponse.data.gender,
            authorization: refreshResponse.headers.authorization,
          });

          localStorage.setItem("@desafioBooks", refreshResponse.headers.authorization);
        }
      }
    } catch (error) {
      throw new Error(error);
    }
  }
 
  return (
    <AuthContext.Provider value={{ user, handleSignIn }}>
      <React.Fragment>{children}</React.Fragment>
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
