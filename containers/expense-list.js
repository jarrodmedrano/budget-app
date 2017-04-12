import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { StyleSheet, Text, View, TextInput, Button, ListView } from 'react-native';
import {selectExpense} from '../actions/index';

class ExpenseList extends React.Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.expenses)
    };
  }

  // createListItems() {
  //   return this.props.expenses.map((expense, id) => {
  //     return (
  //       <Text key={id}>{expense.expenseName}</Text>
  //     )
  //   })
  // }

  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}} refreshing>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text onTouchEnd={()=> this.props.selectExpense(rowData)}>{rowData.expenseName}</Text>}
        />
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    expenses: state.expenses
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectExpense: selectExpense}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ExpenseList);