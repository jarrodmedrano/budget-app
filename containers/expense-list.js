import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  createListItems() {
    return this.props.expenses.map((expense, id) => {
      return (
        <View key={id}><Text>{expense.expenseName}</Text></View>
      )
    })
  }

  render() {
    return (
      <View>
        {this.createListItems()}
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    expenses: state.expenses
  }
}

export default connect(mapStateToProps)(ExpenseList);