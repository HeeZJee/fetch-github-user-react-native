import React from 'react'
import { StyleSheet, Text, View, Modal, Image, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';


const UserModal = ({ modalState, setModalState, userDetail }) => {

    return (
        userDetail ?
            <Modal visible={modalState} animationType='slide'>
                <View style={styles.textContainer}>
                    <Image
                        style={styles.avatar}
                        source={{
                            uri: userDetail.avatar_url,
                        }}
                    />
                    <Text style={styles.name}>   {userDetail.name}</Text>
                    <View style={styles.followContainer}>
                        <Text style={styles.follow}>Followers: {userDetail.followers}</Text>
                        <Text style={styles.follow}>Following: {userDetail.following}</Text>
                    </View>

                    <Text style={styles.location}>{userDetail.location}</Text>
                </View>
                <TouchableOpacity onPress={() => setModalState(false)}>
                    <AntDesign style={styles.close} name="closecircleo" size={50} color="black" />
                </TouchableOpacity>
            </Modal> : null

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
