import React, { useCallback, useContext } from "react";
import { Button, Form, FormGroup, Label, Input, ListGroup } from 'reactstrap';
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div style={{width: '50%', backgroundColor: '#7159c1', color: '#fff', padding: 50, borderRadius: 30}}>
      <h1>Entrar na conta</h1>
      <ListGroup>
        <Form onSubmit={handleLogin}>

          <FormGroup>
            <Label for="Email">E-mail</Label>
            <Input type="email" name="email" placeholder="digite seu email.." />
          </FormGroup>

          <FormGroup>
            <Label for="Password">Senha</Label>
            <Input type="password" name="password" placeholder="digite sua senha.." />
          </FormGroup>

          <Button type="submit">Entrar</Button>
        </Form>
      </ListGroup>
    </div>
  );
};

export default withRouter(Login);
