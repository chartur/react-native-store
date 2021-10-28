import React, {Component} from 'react';
import {Product} from '../../models/product';
import {
  getBestSellersProductsAction,
  productsLoaded,
} from '../../actions/prodcts.action';
import {connect} from 'react-redux';
import ProductsService from '../../services/products.service';
import {ScrollView, Text, View} from 'react-native';
import styleSheet from './home.style';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import ContentLoading from '../../components/content-loading/content-loading';
import ProductCard from '../../components/product-card/product-card';
import {LoadedDataActionPayload} from '../../abstraction/LoadedDataActionPayload';
import BannerContainer from '../../components/banner-container/banner-container';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s} = bootstrapStyleSheet;

interface PropsInterface {
  products: {
    bestProducts: {
      products: Product[];
      loaded: boolean;
    };
  };
  loadBestSellersProducts: Function;
  dataLoaded: Function;
}

class Home extends Component<PropsInterface> {
  private productsService: ProductsService = new ProductsService();

  componentDidMount(): void {
    console.log(this.props.products.bestProducts);
    this.getBestSellersProducts();
  }

  async getBestSellersProducts() {
    try {
      const res = await this.productsService.getBestSellerProducts();
      this.props.loadBestSellersProducts(res.data);
      this.props.dataLoaded({
        value: true,
        stateKey: 'bestSellersProducts',
      });
    } catch (e) {
      console.log(e);
    }
  }

  renderProductCard(product: Product) {
    return (
      <View
        style={{
          flexBasis: '48%',
          marginBottom: 10,
        }}
        key={product.id}>
        <ProductCard product={product} />
      </View>
    );
  }

  render() {
    const {bestProducts} = this.props.products;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={s.mb5}>
            <View
              style={[
                s.dFlex,
                s.flexRow,
                s.justifyContentBetween,
                s.alignItemsCenter,
              ]}>
              <Text style={styleSheet.title}>Hot sales</Text>
              <Text style={styleSheet.link}>see more</Text>
            </View>
            <BannerContainer />
          </View>

          <View>
            <View
              style={[
                s.dFlex,
                s.flexRow,
                s.justifyContentBetween,
                s.alignItemsCenter,
              ]}>
              <Text style={styleSheet.title}>Best Seller</Text>
              <Text style={styleSheet.link}>see more</Text>
            </View>
            <View style={[s.mt2]}>
              {!bestProducts.loaded ? (
                <ContentLoading />
              ) : (
                <View
                  style={[
                    s.dFlex,
                    s.flexRow,
                    s.justifyContentBetween,
                    {flexWrap: 'wrap'},
                  ]}>
                  {bestProducts.products.map(this.renderProductCard)}
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  products: {
    bestProducts: state.productsReducer.bestSellersProducts,
  },
});

const mapDispatchToProps = dispatch => ({
  loadBestSellersProducts: (bestProducts: Product[]) =>
    dispatch(getBestSellersProductsAction(bestProducts)),
  dataLoaded: (payload: LoadedDataActionPayload) =>
    dispatch(productsLoaded(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
