import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './src/reducers';
import ExpenseList from './src/containers/expense-list';
import ExpenseForm from './src/containers/expense-form';

const store = createStore(allReducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <View style={{flex: 1}}>
            <View style={styles.header}><Text style={styles.textHeader}>Budget2Budget</Text></View>
            <View style={styles.body}>
              <ExpenseForm />
              <ExpenseList />
            </View>
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  header: {
    backgroundColor: 'honeydew',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid'
  },
  textInput: {
    height: 40, borderColor: 'gray', borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    padding: 10
  },
  button: {

  }
});
