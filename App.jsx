import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';
import SearchUser from './components/SearchUser/SearchUser';
import UsersList from './components/UsersList/UsersList';
import UserContextProvider from './components/store/UserContext';

export default function App() {
  return (
    <UserContextProvider>
      <View style={styles.container}>
        <SearchUser />
        <UsersList />
      </View>
    </UserContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
});
