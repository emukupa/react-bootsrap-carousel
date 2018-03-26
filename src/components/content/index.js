import React from "react";
import { Container, Row, Col } from "reactstrap";
import FeaturedCarousel from "./carousels/featuredCarousel";

import styled from 'styled-components';

const Box = styled.div`
  border: 2px solid #232323;
  padding: 10px;
  width: 300px;
  height: 300px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px 3px #eee;
`;

class Content extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <FeaturedCarousel />
        </Container>
        <Container>
          <Row>
          {[1,2,3,4,5,6,7,8,9,10].map(x =>(
            <Box>item {x}</Box>
          ))}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default Content;
