// @flow
import React, { useState } from 'react';
import Grid from './components/Grid';
import { generateInitialRandomGrid } from './utils/randomGrid';
import { getRefreshedGrid } from './utils/refreshGrid';
import useInterval from './hooks/useInterval';
import sampleGrid from './data/sampleGrid';
import './App.css';

type TwoDimensionalArrayOfNumbers = Array<Array<number>>;

const GRID_SIZE: number = parseInt(process.env.REACT_APP_GRID_SIZE) || 50;
const GRID_REFRESH_INTERVAL: number =
	parseInt(process.env.REACT_APP_GRID_REFRESH_INTERVAL) || 1000;

const initialGrid: TwoDimensionalArrayOfNumbers = process.env
	.REACT_APP_SAMPLE_GRID
	? sampleGrid
	: generateInitialRandomGrid(GRID_SIZE);

function App() {
	const [grid, setGrid] = useState<TwoDimensionalArrayOfNumbers>(initialGrid);

	useInterval(() => {
		const refreshedGrid = getRefreshedGrid(grid);
		setGrid(refreshedGrid);
	}, GRID_REFRESH_INTERVAL);

	return (
		<div className="Main">
			<div className="Container">
				<Grid grid={grid} />
			</div>
		</div>
	);
}

export default App;
