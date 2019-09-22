import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import BlockInTable from '../blockInTable/blockInTable';

class LatestBlocks extends Component {
  render() {
    const { blockList = [] }  = this.props;
    return (
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Height</th>
            <th>Hash</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {blockList && blockList.length
            ? blockList.map((block, index) => {
              return <BlockInTable key={`block-${block.hash}`} block={block} index={index}/>;
            })
          // eslint-disable-next-line react/no-unescaped-entities
            : <tr><td colSpan="4">'No blocks, yay!'</td></tr>}
        </tbody>
      </Table>
    );}
}
LatestBlocks.propTypes = {
  blockList: PropTypes.arrayOf(
    PropTypes.shape({
      blocks: PropTypes.object
    })
  )
};

export default LatestBlocks;
