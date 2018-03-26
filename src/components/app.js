import React from 'react';
import { Container } from 'reactstrap';

import Header from './header';
import Content from './content';
import Footer from './footer';

const App = ()  => {
  return (
    <Container fluid={true}>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
};

export default App;