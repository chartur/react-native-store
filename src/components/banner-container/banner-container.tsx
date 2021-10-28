import React, {Component, useRef} from 'react';
import {Banner} from '../../models/banner';
import {bannersLoaded, getAllBannersAction} from '../../actions/banners.action';
import {connect} from 'react-redux';
import BannersService from '../../services/banners.service';
import {ImageBackground, Text, View, Animated} from 'react-native';
import styleSheet from './banner-container.style';
import Spinner from '../spinner/spinner';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const {s} = bootstrapStyleSheet;

interface PropsInterface {
  banner: {
    images: Banner[];
    loaded: boolean;
  };
  loadAllBanners: Function;
  dataLoaded: Function;
}

class BannerContainer extends Component<PropsInterface> {
  state = {
    bannerIndex: 0,
  };

  animation = new Animated.Value(0);
  private bannersService: BannersService = new BannersService();

  componentDidMount(): void {
    this.getBanners();
  }

  async getBanners() {
    try {
      const res = await this.bannersService.getAll();
      if (!res.data || !res.data.length) {
        this.setState({
          hasDataProvided: false,
        });
      }
      this.props.loadAllBanners(res.data);
      this.props.dataLoaded(true);
      this.startSliding();
    } catch (e) {
      console.log(e);
    }
  }

  startSliding() {
    const {images} = this.props.banner;
    Animated.timing(this.animation, {
      toValue: 1,
      duration: 400,
      delay: 400,
      useNativeDriver: true,
    }).start(() => {
      if (!images.length) {
        return;
      }

      Animated.timing(this.animation, {
        toValue: 0,
        duration: 400,
        delay: 5000,
        useNativeDriver: true,
      }).start(() => {
        const currentIndex =
          this.state.bannerIndex + 1 > images.length - 1
            ? 0
            : this.state.bannerIndex + 1;

        this.setState({
          bannerIndex: currentIndex,
        });

        this.startSliding();
      });
    });
  }

  renderBanner() {
    const {images} = this.props.banner;
    return (
      <View style={styleSheet.bannerContainer}>
        {!images.length ? (
          <Text style={s.textCenter}>There are no data provided!</Text>
        ) : (
          <Animated.View
            style={{
              opacity: this.animation,
              width: '100%',
              height: '100%',
            }}>
            <ImageBackground
              source={{
                uri: images[this.state.bannerIndex].path,
              }}
              style={styleSheet.image}
              resizeMode="cover"
            />
          </Animated.View>
        )}
      </View>
    );
  }

  render() {
    const {loaded} = this.props.banner;
    return <View>{!loaded ? <Spinner /> : this.renderBanner()}</View>;
  }
}

const mapStateToProps = state => ({
  banner: {
    ...state.bannersReducer,
    ...state.bannersReducer,
  },
});

const mapDispatchToProps = dispatch => ({
  loadAllBanners: (banners: Banner[]) => dispatch(getAllBannersAction(banners)),
  dataLoaded: (status: boolean) => dispatch(bannersLoaded(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BannerContainer);
