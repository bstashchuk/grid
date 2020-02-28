const getAliveNeighboursQty = ({ grid, rowIndex, columnIndex }) => {
	const isCellAvailable = (length, rowIndex, columnIndex) => {
		if (
			rowIndex < 0 ||
			columnIndex < 0 ||
			rowIndex >= length ||
			columnIndex >= length
		) {
			return false;
		}
		return true;
	};

	const gridLength = grid.length;
	let aliveNeighboursQty = 0;

	for (let i = -1; i <= 1; i++) {
		for (let j = -1; j <= 1; j++) {
			if (j === 0 && i === 0) {
				continue;
			}
			const neighbourCellRowIndex = rowIndex + i;
			const neighbourCellColumnIndex = columnIndex + j;
			if (
				isCellAvailable(
					gridLength,
					neighbourCellRowIndex,
					neighbourCellColumnIndex
				)
			) {
				if (grid[neighbourCellRowIndex][neighbourCellColumnIndex]) {
					aliveNeighboursQty++;
				}
			}
		}
	}

	return aliveNeighboursQty;
};

export default getAliveNeighboursQty;
