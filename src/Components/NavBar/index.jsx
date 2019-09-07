import React from "react";
import app from "../../base";
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
  DropdownItem
} from 'reactstrap';

import Logo from '../../assets/img/logo.png';
import './index.css';

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
        <Navbar className="Nab-Bar" light expand="md">
          <NavbarBrand style={{display: 'flex', flexDirection: 'row'}}>
              <img src={Logo} alt="icon" className="Img-Logo"/>
              <h6 className="Text-Logo">Grupo Pisiquê</h6>
              </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar color="primary">
            <Nav className="ml-auto" navbar >
              <NavItem>
                <NavLink className="Text-Body" href="#">Biblioteca</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="Text-Body" href="#">Instituições</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="Text-Body">
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
    );
  }
}