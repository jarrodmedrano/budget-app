import React from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { Field, reduxForm } from 'redux-form'

const submit = (values) => {
  console.log('submitting form', values)
};

const RenderInput = (props) => {
  const { input, meta, ...inputProps } = props;

  const formStates = ['active', 'autofilled', 'asyncValidating', 'dirty', 'invalid', 'pristine',
    'submitting', 'touched', 'valid', 'visited'];


  return (
    <View>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
      <Text>The { input.name} input is:</Text>
      {
        formStates.filter((state) => meta[state]).map((state) => {
          return <Text key={state}> - { state }</Text>;
        })
      }
    </View>
  );
}

const ExpenseForm = (props) => {

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
      <TouchableOpacity onPress={props.handleSubmit}>
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