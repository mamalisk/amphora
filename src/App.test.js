import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App marketingStore={{
    states: {
      one: 1,
      two: 2,
    },
    colors: {
      one: 'blue',
      two: 'green'
    }
  }}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
