import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from '../navBar/navBar';

const MainPageContainer = ({match}) => {
  return (
    <div>
      <Container>
        <Navbar match={match}/>
      </Container>
    </div>
  );};

export default MainPageContainer;
