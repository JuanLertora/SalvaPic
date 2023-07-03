import React from 'react'
import Constants from 'expo-constants'
import { StyleSheet, View } from 'react-native'
import RepositoryList from '../RepositoriesComponents/RepositoriesList/RepositoriesList'

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1
  }
})

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <RepositoryList />
    </View>
  )
}

export default Home
