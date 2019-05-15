import React from "react";
import {Container, Row, Col} from "reactstrap";
import NearBy from "../components/nearbyBTN";
import Search from "../components/searchBTN";
import {Link} from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <section style={{marginTop: "3rem"}}>
        <Container>
          <Row>
            <Col md="6">
              <h1 style={{textAlign: "center"}}>
                <Link to="/result">
                  <NearBy />
                </Link>
              </h1>
            </Col>
            <Col md="6">
              <h1 style={{textAlign: "center"}}>
                <Link to="/search">
                  <Search />
                </Link>
              </h1>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Landing;
