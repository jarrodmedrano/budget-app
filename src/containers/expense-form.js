import React from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { reduxForm } from 'redux-form'

const submit = (values) => {
  console.log('submitting form', values)
};

const ExpenseForm = (props) => {
  const { handleSubmit } = props;


  return (
    <View style={styles.container}>
      <Text>Add a new expense</Text>
      <TextInput style={styles.input} placeholder="Expense Name" />
      <TextInput style={styles.input} placeholder="Expense Cost" />
      <TextInput style={styles.input} placeholder="Expense Date" />
      <TouchableOpacity onPress={handleSubmit(submit)}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
};

export default reduxForm({
  form: 'test'
})(ExpenseForm)

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  container: {

  },
  input: {
    borderWidth: 1,
    height: 37,
    width: 250,
    padding: 10,
    marginTop: 10
  }
});