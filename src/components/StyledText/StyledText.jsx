import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../../theme.js'

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  colorPrimary: {
    color: theme.colors.textPrimary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  blue: {
    color: theme.colors.blue
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  subHeading: {
    fontSize: theme.fontSizes.subHeading
  },
  textAllignCenter: {
    textAlign: 'center'
  }
})

export default function StyledText ({
  allign, color, fontSize, children,
  fontWeight, style, ...restOfProps
}) {
  const textStyle = [
    styles.text,
    allign === 'center' && styles.textAllignCenter,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    color === 'blue' && styles.blue,
    fontSize === 'subHeadin' && styles.subHeading,
    fontWeight === 'bold' && styles.bold,
    style
  ]

  return (
    <Text style={textStyle} {...restOfProps}>{children}</Text>
  )
}
