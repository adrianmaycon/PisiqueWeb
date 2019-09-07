import React from "react";
import app from "../base";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './Styles/index.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="List-Body">
        <Navbar className="Nab-Bar" color="light" light expand="md">
          <NavbarBrand href="/"><h6><font size="6" face="maiandra gd">Grupo Pisiquê</font></h6></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Biblioteca</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Instituições</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Configurações
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Meu Perfil
                  </DropdownItem>
                  <DropdownItem>
                    Histórico
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => app.auth().signOut()}>
                    Sair da Conta
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

// const Home = () => {
//   return (
//     <div className="List-Body">
//       <h1>Seja Bem Vindo!</h1>
//       <button onClick={() => app.auth().signOut()}>Sair da conta</button>
//     </div>
//   );
// };

// export default Home;
