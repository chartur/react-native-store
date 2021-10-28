import React, {Component} from 'react';
import {Image, View} from 'react-native';
import styleSheet from './spinner.style';
const loadingGif = require('../../assets/spinner.gif');

interface PropsInterface {
  containerHeight?: number | string;
  containerWidth?: number | string;
  loadingSize?: number;
}

export default class Spinner extends Component<PropsInterface> {
  private containerHeight: number | string = 'auto';
  private containerWidth: number | string = '100%';
  private loadingSize: number | string = 50;

  constructor(props) {
    super(props);
    this.containerHeight = this.props.containerHeight || this.containerHeight;
    this.containerWidth = this.props.containerWidth || this.containerWidth;
    this.loadingSize = this.props.loadingSize || this.loadingSize;
  }

  render() {
    return (
      <View
        style={[
          styleSheet.loadingContainer,
          {height: this.containerHeight, width: this.containerWidth},
        ]}>
        <Image
          style={{height: this.loadingSize, width: this.loadingSize}}
          source={loadingGif}
        />
      </View>
    );
  }
}
