import React from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { Field, reduxForm } from 'redux-form'
import RenderInput from './render-input';
import submitExpenseForm from '../actions/index';

const ExpenseForm = (props) => {
  const { handleSubmit } = props;

  const formStates = ['active', 'autofilled', 'asyncValidating', 'dirty', 'invalid', 'pristine',
    'submitting', 'touched', 'valid', 'visited'];

  return (
    <View style={styles.container}>
      <Text>Add a new expense</Text>
      <Field style={styles.input} name={'name'} placeholder="Expense Name" component={RenderInput} />
      <Field style={styles.input} name={'cost'} placeholder="Expense Cost" component={RenderInput} />
      <Field style={styles.input} name={'date'} placeholder="Expense Date" component={RenderInput} />
      <Text>The form is:</Text>
      {
        formStates.filter((state) => props[state]).map((state) => {
          return <Text key={state}> - { state }</Text>
        })
      }
      <TouchableOpacity onPress={handleSubmit(submitExpenseForm)}>
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