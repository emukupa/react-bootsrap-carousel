import React from 'react';
//import { Container } from 'reactstrap';

import styled from 'styled-components';

const Div = styled.div`
  background-color: #232323;
  color: #fff;
  padding: 10px;
  height: 100px;
  border-radius: 20px 20px 0 0 ;
`;
class Header extends React.Component {
  render() {
    return (
      <Div>
        Header data
      </Div>
    );
  }
};
export default Header;