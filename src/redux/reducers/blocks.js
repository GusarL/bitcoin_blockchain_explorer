import { GET_BLOCK, GET_BLOCK_LIST } from '../actionTypes';

const initialState = {
  blockList: [],
  block: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
  case GET_BLOCK_LIST: {
    const { blocks } = action.payload;
    return {
      ...state,
      blockList: blocks,
    };
  }
  case GET_BLOCK: {
    const { block } = action.payload;
    return {
      ...state,
      block: [...block],
    };
  }
  default:
    return state;
  }
}
