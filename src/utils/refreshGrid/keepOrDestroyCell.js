import getAliveNeighboursQty from './getAliveNeighboursQty';

const keepOrDestroyCell = ({ grid, rowIndex, columnIndex }) => {
	const currentCell = grid[rowIndex][columnIndex];
	const cellIsAlive = !!currentCell;
	const aliveNeighboursQty = getAliveNeighboursQty({
		grid,
		rowIndex,
		columnIndex
	});

	if (cellIsAlive && (aliveNeighboursQty < 2 || aliveNeighboursQty > 3)) {
		return 0;
	}

	if (!cellIsAlive && aliveNeighboursQty === 3) {
		return 1;
	}

	return currentCell;
};

export default keepOrDestroyCell;
