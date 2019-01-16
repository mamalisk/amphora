import React, { Component } from 'react'
import styled from 'styled-components';
import { Slider, CheckedSlider } from './atoms/Slider';
const defaultHeight = '34px';

const ToggleSwitchContainer = styled.div`
    display: inline-block;
    position: relative;
    text-align: center;
    width: 60px;
    height: ${defaultHeight};
`;


export default class ToggleSwitch extends Component {
  render() {
    
    const SwitchSlider = !!this.props.checked ? CheckedSlider : Slider;
    return (
     <>
        <h2>{this.props.name}</h2>
          <ToggleSwitchContainer>
            <SwitchSlider
                    color={this.props.color}
                    defaultHeight={defaultHeight}
                    onClick={this.props.onClick}
              />
          </ToggleSwitchContainer>
      </>
    )
  }
}
