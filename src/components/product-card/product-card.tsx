import React, {Component} from 'react';
import {Product} from '../../models/product';
import {Image, View} from 'react-native';
import styleSheet from './produc-card.style';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';

interface PropsInterface {
  product: Product;
}

export default class ProductCard extends Component<PropsInterface> {
  render() {
    const {product} = this.props;

    return (
      <View style={styleSheet.productCard}>
        <View style={styleSheet.productFavoriteButton}>
          <FontAwesomeIcon
            icon={faHeart}
            style={styleSheet.productFavoriteIcon}
          />
        </View>
        <View>
          <Image
            style={styleSheet.productImage}
            source={{
              uri: product.imagePath,
            }}
          />
        </View>
      </View>
    );
  }
}
