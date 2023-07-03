import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Formik, useField } from 'formik';
import StyledTextInput from '../../components/StyledTextInput/StyledTextInput';
import StyledText from '../../components/StyledText/StyledText';

const styles = StyleSheet.create({
  errors: {
    color: 'red'
  },
  form: {
      margin: 15
  }
})

const FormikInputValue = ({ name, ...props }) => {
 const [field, meta, helpers] = useField(name)

 return (
  <>
          <StyledTextInput
            onChangeText = {value => helpers.setValue(value)}
            value = {field.value}
            {...props}
          />
          {meta.error && <StyledText style={styles.errors}>{meta.error}</StyledText>}
  </>
 )
}

const validate = (values, props) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors
}

const Login = () => (
  <View style={styles.form}>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={validate}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        handleSubmit
      }) => (
        <View>
          <FormikInputValue
            name='email'
            placeholder='email'
          />
          <FormikInputValue
            name='password'
            placeholder='password'
          />
          <Button onPress={handleSubmit} title='Inciar Sesion'/>
        </View>
      )}
    </Formik>
  </View>
);

export default Login;
