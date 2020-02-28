import React from 'react';
const getCellClass = gridCell => {
	const gridCellIsAlive = gridCell === 1 ? true : false;

	return gridCellIsAlive ? 'Cell Cell-black' : 'Cell';
};

function GridCell({ gridCell }) {
	return <td className={getCellClass(gridCell)}></td>;
}

export default GridCell;
