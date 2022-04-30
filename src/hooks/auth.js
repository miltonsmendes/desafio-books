import React, { createContext, useContext, useState } from "react";

import api from "../services/api";

const AuthContext = createContext();

function AuthProvider({children}) {
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

      if (response.status === 200) {
        setUser({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          birthdate: response.data.birthdate,
          gender: response.data.gender,
          authorization: response.headers.authorization,
        });
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  console.log('RESPONSE', user);

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
