import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList, Modal, TouchableOpacity } from 'react-native'
import UserModal from '../UserModal/UserModal'
import { ContextAPI } from '../store/UserContext'


const UserItem = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)
    const [modalState, setModalState] = useState(false)

    const { fetchUser } = useContext(ContextAPI)



    useEffect(() => {
        (async () => {
            setLoading(true)
            const data = await fetchUser()
            setUser(data)
            setLoading(false)
        })()
    }, [setUser, setLoading, fetchUser])


    return (
        <TouchableOpacity onPress={() => setModalState(true)}>
            <View>
                {
                    loading
                        ? <Text>Loading... </Text>
                        : < View style={styles.userContainer}>
                            <Image
                                style={styles.avatar}
                                source={{
                                    uri: user?.data?.avatar_url,
                                }}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.username}> {user?.data?.login}</Text>
                                <Text style={styles.url}>   {user?.data?.url}</Text>
                            </View>
                        </View>
                }
                <UserModal modalState={modalState} setModalState={setModalState} />
            </View >
        </TouchableOpacity>
    )
}

export default UserItem

const styles = StyleSheet.create({
    userContainer: {
        backgroundColor: '#666',
        padding: 10,
        fontSize: 19,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    username: {
        color: 'white',
        fontSize: 19,
        marginLeft: 5,
    },
    url: {
        color: '#ccc',
        fontSize: 14,
    }
})
