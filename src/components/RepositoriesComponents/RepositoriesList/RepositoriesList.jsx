import React from 'react'
import { StatusBar, FlatList, View, StyleSheet } from 'react-native';
import RepositoriesItem from '../RepositoriesItem/RepositoriesItem';
import useRepositories from '../../../hooks/useRepositories';

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = () => {
  const { repositories } = useRepositories()
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoriesItem {...item} />}
    />
  )
}

const styles = StyleSheet.create({
  separator: {
    height: 10
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});

export default RepositoryList
