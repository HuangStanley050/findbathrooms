import React from "react";
import {FaToilet} from "react-icons/fa";
import {Link} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Navigation extends React.Component {
  state = {
    collapsed: true
  };
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <div>
        <Navbar style={{backgroundColor: "#4172a3"}} light>
          <div className="mx-auto">
            <Link to="/">
              <FaToilet style={{fontSize: "2rem", color: "white"}} />
            </Link>
          </div>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <div style={{width: "144.15px"}} className="mx-auto">
                <NavItem>
                  <NavLink tag={Link} style={{color: "red"}} to="/result">
                    Nearby
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} style={{color: "blue"}} to="/search">
                    Search
                  </NavLink>
                </NavItem>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
