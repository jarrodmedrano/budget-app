import React from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'

const RenderInput = (props) => {
  const { input, meta, ...inputProps } = props;

  // const formStates = ['active', 'autofilled', 'asyncValidating', 'dirty', 'invalid', 'pristine',
  //   'submitting', 'touched', 'valid', 'visited'];

  return (
    <View>
      <TextInput
        {...inputProps}
        {...input}
      />
      {meta.touched ? meta.error : null}
      { /*

      <Text>The {input.name} input is:</Text>
      {
        formStates.filter((state) => meta[state]).map((state) => {
          return <Text key={state}> - { state }</Text>;
        })
      }
      */
      }
    </View>
  );
}

const styles = StyleSheet.create({



});

export default RenderInput;