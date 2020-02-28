// @flow
type TwoDimensionalArrayOfNumbers = Array<Array<number>>;

const create2DEmptyGrid = (gridSize: number): TwoDimensionalArrayOfNumbers => {
	const twoDimensionalArray: TwoDimensionalArrayOfNumbers = [];

	for (let index: number = 0; index < gridSize; index++) {
		twoDimensionalArray[index] = [];
	}

	return twoDimensionalArray;
};

export default create2DEmptyGrid;
