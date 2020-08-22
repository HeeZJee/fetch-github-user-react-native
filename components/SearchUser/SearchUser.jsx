import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import { ContextAPI } from '../store/UserContext'


const SearchUser = () => {

    const [user, setUser] = useState('')

    const { searchHandler } = useContext(ContextAPI)


    return (
        <View>
            <Text style={styles.label}>Search Github User</Text>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="e.g. HeeZJee"
                    onChangeText={(val) => setUser(val)} />
                <TouchableOpacity style={styles.btn} onPress={() => searchHandler(user)}>
                    <Text style={styles.btnText}> Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default SearchUser

const styles = StyleSheet.create({

    label: {
        fontSize: 19,
        textAlign: 'center',
        color: 'dodgerblue',
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 100,
        marginVertical: 0,
    },

    input: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'dodgerblue',
        marginBottom: 20,
        marginHorizontal: 30,
        fontSize: 18,
    },
    btn: {
        backgroundColor: 'dodgerblue',
        padding: 10,
        marginHorizontal: 100,
        borderRadius: 10,
    },
    btnText: {
        fontSize: 19,
        color: 'white',
        textAlign: 'center',
    }
})
