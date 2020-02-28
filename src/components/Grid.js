import React from 'react';
import GridCell from './GridCell';

function Grid({ grid }) {
	return (
		<table>
			<tbody>
				{grid.map((gridRow, rowIndex) => (
					<tr key={rowIndex}>
						{gridRow.map((gridCell, columnIndex) => (
							<GridCell gridCell={gridCell} key={columnIndex} />
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Grid;
