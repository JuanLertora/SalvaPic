import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import StyledText from '../../StyledText/StyledText';
import RepositoriesStats from '../RepositoriesStats/RepositoriesStats';
import theme from '../../../theme.js';

const RepositoriesItemHeader = ({ description, ownerAvatarUrl, language, fullName }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight='bold' fontSize='subHeading'>{fullName}</StyledText>
        <StyledText>{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
    </View>
  )
}

const RepositoriesItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoriesItemHeader {...props} />
      <RepositoriesStats {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden',
    marginVertical: 4
  },
  image: {
    width: 48,
    height: 48,
    margin: 'auto',
    borderRadius: 4
  }
})

export default RepositoriesItem
