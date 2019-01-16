import React, { Component } from 'react';
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch';
import './App.css';
import {observer} from 'mobx-react';



@observer class App extends Component {

  render() {
    const { states, colors, updateThe } = this.props.marketingStore;
    const keys = Object.keys(states);
    return <>
            {
              keys.map( state => 
                <ToggleSwitch key={state} name={state}
                              color={colors[state]}
                              checked={states[state]}
                              onClick={() => updateThe(state)} />
              )
            }
        </>
  }
}

export default App;