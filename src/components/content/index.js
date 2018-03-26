import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import FeaturedCarousel from './carousels/featuredCarousel';
//import 
class Content extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid={true}>
          <FeaturedCarousel />
        </Container>
        <Container>
          Rest of the content
        </Container>
      </React.Fragment>
    );
  }
};
export default Content;