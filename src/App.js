import React from 'react';
import { ThemeProvider } from 'styled-components';
import Board from './components/Board';
import TimeCard from './components/TimeCard';
import theme from './styles/theme';
import { Flexbox } from './styles/dndStyles';
import Droppable from './components/Droppable';
import Draggable from './components/Draggable';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Board />

          <Flexbox>
            <Droppable id="board-1">
              <Draggable id="card-1" draggable="true">
                <TimeCard />
              </Draggable>
            </Droppable>
            <Droppable id="board-2">
              <Draggable id="card-2" draggable="true">
                <TimeCard id="fklsdhflskh" />
              </Draggable>
            </Droppable>
          </Flexbox>
        </ThemeProvider>
      </div>
    </Provider>
  );
}

export default App;