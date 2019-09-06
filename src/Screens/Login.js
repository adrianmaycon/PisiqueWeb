import React, { useCallback, useContext } from "react";
import { Button, Form, FormGroup, Label, Input, ListGroup } from 'reactstrap';
import { withRouter, Redirect } from "react-router";
import app from "../base.js";
import { AuthContext } from "../Auth.js";
import './Styles/index.css';

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
    <div className="List-header">
      <div className="Div-Login">
        <ListGroup>
          <center><h1 ><font size="6" face="maiandra gd">Grupo Pisiquê</font></h1></center>
          <Form onSubmit={handleLogin}>

            <FormGroup>
              <Label for="Email">E-mail</Label>
              <Input type="email" name="email" placeholder="digite seu email.." />
            </FormGroup>

            <FormGroup>
              <Label for="Password">Senha</Label>
              <Input type="password" name="password" placeholder="digite sua senha.." />
            </FormGroup>

            <Button style={{ backgroundColor: '#634DA8', border: 1, width: '100%', height: 50 }} type="submit">Entrar</Button>
          </Form>
        </ListGroup>
      </div>
    </div>
  );
};

export default withRouter(Login);
