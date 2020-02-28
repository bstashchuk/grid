import { create2DEmptyGrid } from '../emptyGrid';
import keepOrDestroyCell from './keepOrDestroyCell';

const getRefreshedGrid = grid => {
	const gridSize = grid.length;
	const refreshedGrid = create2DEmptyGrid(gridSize);

	for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
		for (let columnIndex = 0; columnIndex < gridSize; columnIndex++) {
			refreshedGrid[rowIndex][columnIndex] = keepOrDestroyCell({
				grid,
				rowIndex,
				columnIndex
			});
		}
	}

	return refreshedGrid;
};

export default getRefreshedGrid;
