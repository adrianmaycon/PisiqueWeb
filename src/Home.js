import React from "react";
import app from "./base";

const Home = () => {
  return (
    <>
      <h1>Seja Bem Vindo!</h1>
      <button onClick={() => app.auth().signOut()}>Sair da conta</button>
    </>
  );
};

export default Home;
