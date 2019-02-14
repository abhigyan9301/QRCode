
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View,TextInput, TouchableOpacity, Text,} from 'react-native';
// import all basic components
import Share from 'react-native-share'
import QRCode from 'react-native-qrcode-svg';
//import QRCode

class App extends Component {
    svg;
  constructor() {
    super();
    this.state = {
      inputValue: '',
      inputValue2: '',
      // Default Value of the TextInput
      valueForQRCode: '',
      // Default value for the QR Code
    };
  }

  getTextInputValue = () => {
    // Function to get the value from input
    // and Setting the value to the QRCode
    this.setState({ valueForQRCode: this.state.inputValue + this.state.inputValue2 });
  };
  shareQR =()  =>{
    this.svg.toDataURL((data) => {
      const shareImageBase64 = {
        title: "QR",
        message: "Ehi, this is my QR code",
        type: 'image/png',
        url: `data:image/png;base64,${data}`
      };
      Share.open(shareImageBase64);
    });
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        {/* <QRCode
          value={"Abhigyan" + this.state.valueForQRCode}
          size={250}
          bgColor="#000"
          fgColor="#fff"
          getRef={(ref) => (this.svg = ref)}
          onPress={() =>{shareQR()}}
        /> */}

<TouchableOpacity onPress={this.shareQR}>
  <QRCode
    value={"," + this.state.valueForQRCode}
    size={250}
    fgcolor="#fff"
    bgColor="#000"
    getRef={(ref) => (this.svg = ref)}
  />
</TouchableOpacity>

        <TextInput
          // Input to get the value to set on QRCode
          style={styles.TextInputStyle}
          onChangeText={text => this.setState({ inputValue: text })}
          underlineColorAndroid="transparent"
          placeholder="Enter text to Generate QR Code"
        />

<TextInput
          // Input to get the value to set on QRCode
          style={styles.TextInputStyle}
          onChangeText={text => this.setState({ inputValue2: text })}
          underlineColorAndroid="transparent"
          placeholder="Enter text to Generate QR Code"
        />
        <TouchableOpacity
          onPress={this.getTextInputValue}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.TextStyle}> Generate QR Code </Text>
        </TouchableOpacity>

      </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    paddingTop: 40,
  },

  TextInputStyle: {
    width: '100%',
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    textAlign: 'center',
  },

  button: {
    width: '100%',
    paddingTop: 8,
    marginTop: 10,
    paddingBottom: 8,
    backgroundColor: '#F44336',
    marginBottom: 20,
  },

  TextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});