const redux = require('redux');

const reducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increase') {
    return { counter: state.counter + 1 };
  }

  if (action.type === 'decrease') {
    return { counter: state.counter - 1 };
  }

  return state;
};

const store = redux.createStore(reducer);

store.subscribe(() => {
  console.log('Store changed:', store.getState());
});

store.dispatch({ type: 'increase' });
store.dispatch({ type: 'increase' });

store.dispatch({ type: 'decrease' });
