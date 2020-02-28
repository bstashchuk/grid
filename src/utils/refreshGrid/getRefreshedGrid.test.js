import getRefreshedGrid from './getRefreshedGrid';

describe('getRefreshedGrid', () => {
	it('it should return correct refreshed 2x2 grid', () => {
		const currentGrid = [
			[1, 0],
			[0, 0]
		];

		const refreshedGrid = [
			[0, 0],
			[0, 0]
		];

		expect(getRefreshedGrid(currentGrid)).toEqual(refreshedGrid);
	});

	it('it should return correct refreshed 5x5 grid', () => {
		const currentGrid = [
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0],
			[0, 1, 1, 1, 0],
			[0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0]
		];

		const refreshedGrid = [
			[0, 0, 0, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 1, 0, 0],
			[0, 0, 0, 0, 0]
		];

		expect(getRefreshedGrid(currentGrid)).toEqual(refreshedGrid);
	});
});
