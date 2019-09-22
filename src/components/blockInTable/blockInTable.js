import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {GET_BLOCK_LIST} from '../../redux/actionTypes';

class BlockInTable extends Component {
  render() {
    const { block, index } = this.props;
    return (
      <tr>
        <td>{ index + 1 }</td>
        <td>{ block.height }</td>
        <td>{ block.hash }</td>
        <td>{ block.time }</td>
      </tr>
      
    );}
}

BlockInTable.propTypes = {
  block: PropTypes.object,
  index: PropTypes.number
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
)(BlockInTable);
