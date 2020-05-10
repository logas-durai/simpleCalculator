import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Logs } from 'expo';
import { Colors } from 'react-native/Libraries/NewAppScreen';
var dataArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var operatorArray = ['+', '-', '*'];
var bottomArray = ['clear', '0', '/', '='];
export default class App extends React.Component {

  state = {
    inputValue: '0',
    resultValue: '0',
    type: '',
    tempValue: '0'
  }

  storedValue(data) {

    let { inputValue, resultValue, type, tempValue } = this.state;

    inputValue = (data != 'clear') ? inputValue + data : '0';
    tempValue = (data != 'clear') ? tempValue + data : '0';
    if (data == 'clear') {
      resultValue = '0';
    }
    this.setState({ inputValue, tempValue });
    console.log("Input Value = ", inputValue + "  Temp Value= " + tempValue);

  }

  operationData(data) {

    let { type, inputValue, resultValue, tempValue } = this.state;
    console.log("DATA", data);
    type = data;
    resultValue = inputValue;
    inputValue = '0';
    tempValue = tempValue + data;
    this.setState({ type, inputValue, resultValue, tempValue })
    this.calculationFun(inputValue, resultValue, type);
    console.log("OPERATION FUNCTION EXE ===", "Input Value = ", inputValue + "  Temp Value= " + tempValue + "  RESULT VALUE= " + resultValue + " TYPE= " + type);
  }

  otherData(data) {

    let { type, inputValue, resultValue } = this.state;

    if (data == 'clear') {
      this.storedValue(data);
    } else if (data == '0') {
      this.storedValue(data);
    } else if (data == '/') {
      operationData(data)
    } else if (data == '=') {
      calculationFun(inputValue, resultValue, type);
    }

  }

  calculationFun(firstData, secondData, operationType) {
    let { inputValue, resultValue, tempValue } = this.state;
    if (operationType == '+') {
      resultValue = parseInt(firstData) + parseInt(secondData);
    } else if (operationType == '-') {
      resultValue = parseInt(firstData) - parseInt(secondData);
    } else if (operationType == '*') {
      resultValue = parseInt(firstData) * parseInt(secondData);
    } else if (operationType == '/') {
      resultValue = parseInt(firstData) / parseInt(secondData);
    } else {
      resultValue = 'Error'
    }
    inputValue = '0';
    console.log("DATASSSSSS", inputValue + "===" + resultValue + "===");
    this.setState({ tempValue, resultValue, inputValue });


  }



  render() {
    const { inputValue, resultValue, type, tempValue } = this.state;
    return (<View style={viewStyles.mainStyle}>
      <View style={viewStyles.resultContainer}>
        <Text style={viewStyles.textOutputValue}>{resultValue}</Text>
        <Text style={viewStyles.textInputValue}>{tempValue}</Text>
      </View>

      <View style={viewStyles.keyboardContainer}>


        <View style={viewStyles.subContainer}>

          <View style={viewStyles.numContainer}>
            {dataArray.map((arr, key) =>
              <Text key={key} style={viewStyles.valueContainer} onPress={() => this.storedValue(arr)}>{arr}</Text>)}
          </View>
          <View style={viewStyles.operationContainer}>
            {operatorArray.map((arr, key) =>
              <Text key={key} style={viewStyles.valuesContainer} onPress={() => this.operationData(arr)}>{arr}</Text>)}
          </View>



        </View>



        <View style={viewStyles.sub2Container}>


          <View style={viewStyles.operationsContainer}>
            {bottomArray.map((arr, key) =>
              <Text key={key} style={viewStyles.valuessContainer} onPress={() => this.otherData(resultValue, value, arr)}>{arr}</Text>)}
          </View>



        </View>


      </View>

    </View >);
  }
}


const viewStyles = StyleSheet.create({
  mainStyle: {
    flex: 10,
    padding: 5,
    backgroundColor: '#9f93e3'
  },

  resultContainer: {

    flex: 3,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 10,
    borderColor: '#000',
    borderWidth: 2
  }, textInputValue: {
    fontSize: 25,
    flex: 2,
    color: '#000000',
    alignSelf: 'flex-end',
    alignContent: 'flex-end',
  },
  textOutputValue: {
    fontSize: 30,
    flex: 1,
    color: '#000000',
    alignSelf: 'flex-end',
    fontWeight: "bold"
  },
  keyboardContainer: {
    flex: 7,
    backgroundColor: '#fff',
  },

  subContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  sub2Container: {
    flex: 1.7,
    flexDirection: 'row',
  },
  operationsContainer: {
    flex: 1,
    backgroundColor: "#bababa",
    flexWrap: 'wrap',
    flexDirection: 'row',


  },

  numContainer: {
    flex: 7.5,
    backgroundColor: "#bababa",
    flexDirection: 'row',
    flexWrap: 'wrap',


  },
  operationContainer: {
    flex: 2.5,
    backgroundColor: "#bababa",
    flexWrap: 'wrap',
    flexDirection: 'row',


  },

  valueContainer: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    backgroundColor: '#23432e',
    padding: 5,
    margin: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '29%'
  },

  valuesContainer: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    backgroundColor: '#23432e',
    padding: 5,
    margin: 5,
    flexWrap: 'wrap',
    width: '90%'
  },

  valuessContainer: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    backgroundColor: '#23432e',
    padding: 5,
    margin: 5,
    flexWrap: 'wrap',
    width: '22%',
    flexDirection: 'row'
  },
}) 
