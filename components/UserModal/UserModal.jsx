import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Modal, Image, TouchableHighlight, TouchableOpacity } from 'react-native'
import { ContextAPI } from '../store/UserContext'
import { AntDesign } from '@expo/vector-icons';


const UserModal = ({ modalState, setModalState }) => {

    const [user, setUser] = useState({})
    const { fetchUser } = useContext(ContextAPI)
    useEffect(() => {
        (async () => {
            const data = await fetchUser()
            setUser(data)
        })()
    }, [setUser, fetchUser])



    return (

        <Modal visible={modalState} animationType='slide'>
            <View style={styles.textContainer}>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: user?.data?.avatar_url,
                    }}
                />
                <Text style={styles.name}>   {user?.data?.name}</Text>
                <View style={styles.followContainer}>
                    <Text style={styles.follow}>Followers: {user?.data?.followers}</Text>
                    <Text style={styles.follow}>Following: {user?.data?.following}</Text>
                </View>

                <Text style={styles.location}>{user?.data?.location}</Text>
            </View>
            <TouchableOpacity onPress={() => setModalState(false)}>
                <AntDesign style={styles.close} name="closecircleo" size={50} color="black" />
            </TouchableOpacity>
        </Modal>

    )
}

export default UserModal

const styles = StyleSheet.create({
    avatar: {
        width: '100%',
        height: '65%',
    },
    name: {
        fontSize: 28,
        textAlign: 'center',
        backgroundColor: 'dodgerblue',
        color: 'white',
        padding: 10,
    },
    login: {
        fontSize: 19,
        textAlign: 'center',
        backgroundColor: 'dodgerblue',
        color: 'white',
    },
    followContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
    },
    follow: {
        fontSize: 19,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#999',
        color: '#666',
        padding: 5,
        flex: 1,
        margin: 10,
        borderRadius: 10,
    },
    location: {
        fontSize: 19,
        padding: 5,
        textAlign: 'center',
        backgroundColor: '#999',
        color: 'white',
    },
    close: {
        textAlign: 'center',
        marginTop: 20,
    }
})
