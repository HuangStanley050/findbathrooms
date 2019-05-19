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
              <Link
                style={{display: "flex", justifyContent: "center"}}
                to="/result"
              >
                <NearBy />
              </Link>
            </Col>
            <Col md="6">
              <Link
                style={{display: "flex", justifyContent: "center"}}
                to="/search"
              >
                <Search />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default Landing;
