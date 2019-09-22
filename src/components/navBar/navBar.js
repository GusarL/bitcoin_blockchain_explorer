import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import {NavLink, Route, BrowserRouter as Router} from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { apiUrl } from '../../constants';
import { GET_BLOCK_LIST } from '../../redux/actionTypes';
import LatestBlocks from '../latestBlocks/latestBlocks';
import Blocks from '../blocks/blocks';

class NavBar extends Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount() {
    const milliseconds = this.convertDateInMiliseconds();
    axios.get(`${apiUrl}${milliseconds}?format=json&cors=true`)
      .then(res => {
        const blocList = res.data;
        this.props.populateBlockList(blocList);
      });
  }
  
  convertDateInMiliseconds () {
    const currentDate = new Date();
    return currentDate.getTime();
  }
  
  render() {
    const { match } = this.props;
  
    return (
      <div>
        <Router>
          <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Item>
                  <NavLink to={`${match.url}/latest_blocks`} className="nav-link" activeClassName="active">Latest blocks</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to={`${match.url}/blocks`} className="nav-link" activeClassName="active">Blocks</NavLink>
                </Nav.Item>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <div className="tabs">
            <Route path={`${match.path}/latest_blocks`} component={LatestBlocks} />
            <Route path={`${match.path}/blocks`} component={Blocks} />
          </div>
        </Router>
      </div>
    );
  }
}

NavBar.propTypes = {
  match: PropTypes.object,
  // populateBlockList: PropTypes.function,
};

const mapStateToProps = (state) => {
  return {
    blockList: state.blocks.blockList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    populateBlockList: (blockList) => {
      dispatch({type: GET_BLOCK_LIST, payload : blockList });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
