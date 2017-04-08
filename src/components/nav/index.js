import React, { Component } from 'react'
import { 
  Collapse, 
  Navbar, 
  NavbarToggler, 
  NavbarBrand, 
  Nav, 
  NavItem, 
  NavLink 
} from 'reactstrap';
import { NavLink as RouterLink } from 'react-router-dom';

export default class extends Component {
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
      <Navbar color="faded" light toggleable>
        <NavbarToggler right onClick={this.toggle} />
        <NavbarBrand href="/">rplace.io</NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="pull-xs-right" navbar>
            <NavItem>
              <NavLink tag={RouterLink} exact to="/">Home</NavLink>
            </NavItem>
          </Nav>
           <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RouterLink} to="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterLink} to="/register">Signup</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}