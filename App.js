import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Logs } from 'expo';
import { Colors } from 'react-native/Libraries/NewAppScreen';

var addition = '+', subtraction = '-', multiplication = '*', divide = '/', btnEqual = '=', btnClear = 'clear';
var btnZero = 'zero', btnOne = 'one', btnTwo = 'two', btnThree = 'three', btnFour = 'four', btnFive = 'five', btnSix = 'six', btnSeven = 'seven', btnEight = 'eight', btnNine = 'nine';
var FirstRowArray = ["1", "2", "3"];
var SecondRowArray = ['4', '5', '6'];
var ThirdRowArray = ['7', '8', '9'];
var FourthRowArray = ['clear', '0'];
export default class App extends React.Component {

  state = {
    value: '0',
    resultValue: '0',
    type: ''
  }


  storeData(data) {
    let { value } = this.state;
    if (data != 'clear') {
      value = value + data;
    } else {
      value = '';
    }
    this.setState({ value });
  }

  operationData(data) {
    let { value, resultValue, type } = this.state;
    type = data;
    resultValue = value;
    value = '';
    this.setState({ value });
    this.setState({ type })
    this.setState({ resultValue });
    console.log(value + "=" + type + "=" + resultValue);
  }

  calculationData(data1, data2, operationType) {
    console.log("DATA1= " + data1 + " DATA2= " + data2 + " opetation= " + operationType);
    let { value, resultValue } = this.state;
    if (operationType == '+') {
      resultValue = parseInt(data2) + parseInt(data1);
    } else if (operationType == '-') {
      resultValue = parseInt(data1) - parseInt(data2);
    } else if (operationType == '*') {
      resultValue = parseInt(data1) * parseInt(data2);
    } else if (operationType == '/') {
      // resultValue = parseInt(data1) / parseInt(data2);
      resultValue = 12 / 6;
    } else {
      resultValue = 'Error'
    }

    console.log(typeof (resultValue));
    value = ''
    this.setState({ value });
    this.setState({ resultValue });

  }


  render() {
    const { value, resultValue, type } = this.state;
    return (<View style={viewStyles.mainStyle}>
      <View style={viewStyles.resultContainer}>

        <Text style={viewStyles.textOutputValue}>{resultValue}</Text>
        <Text style={viewStyles.textInputValue}>{value}</Text>
      </View>
      <View style={viewStyles.inputContainer}>

        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>

            {FirstRowArray.map((arrValue, key) => (
              <Text key={key} style={viewStyles.textStyle} onPress={() => this.storeData(arrValue)}>{arrValue}</Text>))}

            <Text onPress={() => this.operationData('+')} style={viewStyles.textStyle}>+</Text>

          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            {SecondRowArray.map((item, key1) => (
              <Text key={key1} style={viewStyles.textStyle} onPress={() => this.storeData(item)}>{item}</Text>))}

            <Text onPress={() => this.operationData('-')} style={viewStyles.textStyle}>-</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row' }}>
            {ThirdRowArray.map((item, key2) => (<Text key={key2} style={viewStyles.textStyle} onPress={() => this.storeData(item)}>{item}</Text>))}
            <Text onPress={() => this.operationData('*')} style={viewStyles.textStyle}>*</Text>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            {FourthRowArray.map((item, key4) => (<Text key={key4} style={viewStyles.textStyle} onPress={() => this.storeData(item)}>{item}</Text>))}
            <Text onPress={() => this.operationData('/')} style={viewStyles.textStyle}>/</Text>
            <Text onPress={() => this.calculationData(value, resultValue, type)} style={viewStyles.textStyle}>=</Text>
          </View>

        </View>

      </View>
    </View>);
  }
}


const viewStyles = new StyleSheet.create({
  mainStyle: {
    flex: 1,
    padding: 5,
    backgroundColor: '#9f93e3'
  },

  resultContainer: {

    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 10,
    borderColor: '#000',
    borderWidth: 2
  },
  textInputValue: {
    fontSize: 30,
    flex: 2,
    color: '#000000',
    alignSelf: 'flex-end',
    alignContent: 'flex-end',
  },
  textOutputValue: {
    fontSize: 30,
    flex: 1,
    color: '#000000',
    alignSelf: 'flex-end'
  },
  inputContainer: {
    flex: 9,
    flex: 3
  },
  textStyle: {
    fontSize: 20,
    flex: 1,
    color: '#ffffff',
    textAlign: 'center',
    margin: 5,
    textAlignVertical: 'center',
    backgroundColor: 'blue'
  },

  buttonStyle: {
    padding: 10,
    backgroundColor: '#202646',
    borderRadius: 5
  }

}) 
