import React from "react";
import app from "../../base";
import Logo from '../../assets/img/logo.png';
import { FaShareSquare, FaHome, FaLandmark } from 'react-icons/fa';
import './index.css';

export default class Home extends React.Component {
  render() {
    return (
      <div className="Nav-Bar">
        <div style={{ width: "100%" }}>
          <div className="Logo-Text">
            <img src={Logo} alt="icon" className="Img-Logo" />
            <h6 className="Text-Logo">Grupo Pisiquê</h6>
          </div>
          <div className="linha" />
        </div>

        <div style={{ width: "100%" }}>
          <button className="button" >
            <FaHome size={26} /> Inicial
        </button>
          <button className="button" >
            <FaLandmark size={26} /> Instituições
        </button>
        </div>

        <button className="button-sair" onClick={() => app.auth().signOut()}>
          <FaShareSquare size={26} /> Sair da Conta
        </button>
      </div>
      // <Navbar className="Nab-Bar" light expand="md">
      //   <NavbarBrand style={{ display: 'flex', flexDirection: 'row' }}>
      //     <img src={Logo} alt="icon" className="Img-Logo" />
      //     <h6 className="Text-Logo">Grupo Pisiquê</h6>
      //   </NavbarBrand>
      //   <NavbarToggler onClick={this.toggle} />
      //   <Collapse isOpen={this.state.isOpen} navbar color="primary">
      //     <Nav className="ml-auto" navbar >
      //       <NavItem>
      //         <NavLink className="Text-Body" href="#">Biblioteca</NavLink>
      //       </NavItem>
      //       <NavItem>
      //         <NavLink className="Text-Body" href="#">Instituições</NavLink>
      //       </NavItem>
      //       <UncontrolledDropdown nav inNavbar>
      //         <DropdownToggle nav caret className="Text-Body">
      //           Configurações
      //           </DropdownToggle>
      //         <DropdownMenu right>
      //           <DropdownItem>
      //             Meu Perfil
      //             </DropdownItem>
      //           <DropdownItem>
      //             Histórico
      //             </DropdownItem>
      //           <DropdownItem divider />
      //           <DropdownItem onClick={() => app.auth().signOut()}>
      //             Sair da Conta
      //             </DropdownItem>
      //         </DropdownMenu>
      //       </UncontrolledDropdown>
      //     </Nav>
      //   </Collapse>
      // </Navbar>
    );
  }
}