/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, View, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NativeRouter, Route} from 'react-router-native';

import store from './store';
import {Provider} from 'react-redux';


import Home from './src/pages/home/home';
import styleSheet from './App.style';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <NativeRouter>
        <SafeAreaView style={backgroundStyle}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <View style={styleSheet.scaffold}>
            <Route exact path="/" component={Home} />
          </View>
        </SafeAreaView>
      </NativeRouter>
    </Provider>
  );
};

export default App;
