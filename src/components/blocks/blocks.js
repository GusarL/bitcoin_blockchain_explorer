import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import Table from '../table/table';

class Blocks extends Component {
  render() {
    const { blockList = [] }  = this.props;
    return (
      <Container>
        <h3 className="headers">Blocks</h3>
        <Table blockList={blockList}/>
      </Container>
    );}
}

Blocks.propTypes = {
  blockList: PropTypes.arrayOf(
    PropTypes.shape({
      blocks: PropTypes.object
    })
  )
};

const mapStateToProps = (state) => {
  return {
    blockList: state.blocks.blockList,
  };
};

export default connect(
  mapStateToProps,
)(Blocks);
