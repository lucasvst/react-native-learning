import React, { PureComponent } from 'react'
import { StyleSheet, View, Linking } from 'react-native'
import { RNCamera } from 'react-native-camera'

class NewCoApp extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { barcodes: [] }
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => { this.camera = ref }}
          style={styles.preview}
          onBarCodeRead={this.onBarCodeRead}
        />
      </View>
    );
  }

  onBarCodeRead = (barcode) => {
    this.setState({ barcodes: [barcode] })
    Linking.openURL(barcode.data)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    width: '100%',
  }
});

export default NewCoApp