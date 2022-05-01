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

  const [booksList, setBooksList] = useState([]);

  async function handleSignIn(email, password) {
    // const acesso = {
    //   email: "desafio@ioasys.com.br",
    //   password: "12341234",
    // };

    const acess = {
      email,
      password,
    };

    try {
      const response = await api.post("/auth/sign-in", acess);

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

        api
          .get("/books?page=1$&amount=25", {
            headers: {
              Authorization: `Bearer ${response.headers.authorization}`,
            },
          })
          .then((res) => setBooksList(res.data.data));
      }

      if (response.status === 401 || response.status === 500) {
        const refreshResponse = await api.post("/auth/refresh-token", acess);

        if (refreshResponse.status === 204) {
          setUser({
            id: refreshResponse.data.id,
            name: refreshResponse.data.name,
            email: refreshResponse.data.email,
            birthdate: refreshResponse.data.birthdate,
            gender: refreshResponse.data.gender,
            authorization: refreshResponse.headers.authorization,
          });

          localStorage.setItem(
            "@desafioBooks",
            refreshResponse.headers.authorization
          );
        }
      }
    } catch (error) {}

    try {
      api
        .get("/books?page=1$&amount=25", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@desafioBooks")}`,
          },
        })
        .then((res) => setBooksList(res.data.data));
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, handleSignIn, booksList }}>
      <React.Fragment>{children}</React.Fragment>
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
