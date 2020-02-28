import { create2DEmptyGrid } from '../emptyGrid';

const generateZeroOrOne = () => Math.round(Math.random());

const generateInitialRandomGrid = gridSize => {
	const grid = create2DEmptyGrid(gridSize);

	for (let rowIndex = 0; rowIndex < gridSize; rowIndex++) {
		for (let columnIndex = 0; columnIndex < gridSize; columnIndex++) {
			grid[rowIndex][columnIndex] = generateZeroOrOne();
		}
	}

	return grid;
};

export default generateInitialRandomGrid;
