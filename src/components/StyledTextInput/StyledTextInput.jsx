import React from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 5,
        borderWith: 1,
        borderColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginBottom: 10
    }
  })
  

function StyledTextInput ({ style = {}, ...props}){
    const inputStyle = {
        ...styles.textInput,
        ...style
    }
return (
    <TextInput style={inputStyle} {...props}/>
)
}

export default StyledTextInput