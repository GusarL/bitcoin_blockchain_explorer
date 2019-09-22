import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import Table from '../table/table';

class LatestBlocks extends Component {
  render() {
    const { blockList = [] }  = this.props;
    const blockList10 = blockList.slice(0,10);
    return (
      <Container>
        <h3 className="headers">Last 10 blocks</h3>
        <Table blockList={blockList10}/>
      </Container>
    );}
}
LatestBlocks.propTypes = {
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
)(LatestBlocks);
