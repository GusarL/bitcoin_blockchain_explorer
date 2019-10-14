import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import Table from '../table/table';
import Pagination from 'react-js-pagination';
import './blocks.scss';
import { PREVIOUS, NEXT } from '../../constants';

class Blocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
    };
  }
  
  handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }
  
  render() {
    const { blockList = [] }  = this.props;
    return (
      <Container>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={blockList.length}
          pageRangeDisplayed={1}
          onChange={this.handlePageChange.bind(this)}
          prevPageText={ PREVIOUS }
          nextPageText={ NEXT }
          innerClass={'pagination'}
          activeClass={'pagination-element'}
          activeLinkClass={'pagination-text'}
          linkClass={'pagination-link'}
          disabledClass={'pagination-disabled'}
        />
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
