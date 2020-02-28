import create2DEmptyGrid from './create2DEmptyGrid';

describe('createTwoDimensionalEmptyGrid', () => {
	it('it should return empty grid', () => {
		expect(create2DEmptyGrid()).toEqual([]);
	});

	it('it should return empty 2x2 grid', () => {
		expect(create2DEmptyGrid(2)).toEqual([[], []]);
	});

	it('it should return empty 3x3 grid', () => {
		expect(create2DEmptyGrid(3)).toEqual([[], [], []]);
	});
});
