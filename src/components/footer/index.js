import React from 'react';

//import {Container, Row, Col} from 'reactstrap';
import styled from 'styled-components';

const Div = styled.div`
  background-color: #232323;
  color: #fff;
  padding: 10px;
  height: 300px;
  border-radius: 0 0 20px 20px;
`;

class Footer extends React.Component {
  render() {
    return (
      <Div>
        footer
      </Div>
    );
  }
};
export default Footer;