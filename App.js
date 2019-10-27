import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import NavigationService from './src/NavigationService'

import VoucherScanner from './src/screens/voucher-scanner/VoucherScanner'
import CNHUploader from './src/screens/cnh-uploader/CNHUploader'
import Welcome from './src/screens/welcome/Welcome'

const MainNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: ({ navigation }) => ({ header: null })
  },
  VoucherScanner: {
    screen: VoucherScanner,
    navigationOptions: ({ navigation }) => ({ header: null })
  },
  CNHUploader: {
    screen: CNHUploader,
    navigationOptions: ({ navigation }) => ({ header: null })
  },
})

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
      />
    );
  }
}
