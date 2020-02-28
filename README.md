In this project we generate 2 dimensional grid with living and died cells. Living cells have black background.
Initial grid is generated randomly. Periodically grid ticks and some cells remain alive, some die per living algorithm.

### Default settings

- Grid size: 50x50
- Tick period: 1000ms
- Initial grid: random

### Available environment variables

- REACT_APP_GRID_SIZE: Sets grid size
- REACT_APP_GRID_REFRESH_INTERVAL: Sets grid refresh interval in ms
- REACT_APP_SAMPLE_GRID: If set to any value pre-defined 5x5 grid will be used instead of random one

App with environment variables could be started like so:
- `REACT_APP_GRID_SIZE=20 yarn start`
- `REACT_APP_SAMPLE_GRID=1 yarn start`
- `REACT_APP_GRID_SIZE=30 REACT_APP_GRID_REFRESH_INTERVAL=400 yarn start`

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner. There are few tests for the following util fuctions:

- create2DEmptyGrid
- getRefreshedGrid

### Flow support

Flow types checker is enabled only for those two files

- App.js
- create2DEmptyGrid.js
