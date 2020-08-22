import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import UserItem from '../UserItem/UserItem'

const UsersList = () => {
    return (
        <View style={styles.usersContainer}>
            <UserItem />
        </View>
    )
}

export default UsersList

const styles = StyleSheet.create({
    usersContainer: {
        flex: 1,
        margin: 20,
    }
})
