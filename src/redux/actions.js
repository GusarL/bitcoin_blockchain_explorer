import { GET_BLOCK, GET_TRANSACTION, GET_BLOCK_LIST } from "./actionTypes";

export const getBlock = block => ({
	type: GET_BLOCK,
	payload: {
		block
	}
});

export const getTransaction = transaction => ({
	type: GET_TRANSACTION,
	payload: {
		transaction
	}
});

export const getBlockList = blockList => ({
	type: GET_BLOCK_LIST,
	payload: {
		blockList
	}
});

