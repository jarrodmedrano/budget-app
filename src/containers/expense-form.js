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
      {/*<Text>The form is:</Text>
        formStates.filter((state) => props[state]).map((state) => {
          return <Text key={state}> - { state }</Text>
        })
      */}
      <TouchableOpacity onPress={handleSubmit(submitExpenseForm)}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
};

const validate = (values) => {
  const errors = {};

  !values.name ? errors.name = <Text style={styles.error}>Enter a name</Text> : null;
  !values.cost ? errors.cost = <Text style={styles.error}>Enter a cost</Text> : null;
  !values.date ? errors.date = <Text style={styles.error}>Enter a date</Text> : null;

  return errors;
};

export default reduxForm({
  validate,
  form: 'ExpenseForm'
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
  input: {
    borderWidth: 1,
    height: 37,
    width: 250,
    padding: 10,
    marginTop: 10
  },
  error: {
    color: 'red'
  }
});