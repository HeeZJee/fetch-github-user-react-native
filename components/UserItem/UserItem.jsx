import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, View, Image, FlatList, Modal, TouchableOpacity } from 'react-native'
import UserModal from '../UserModal/UserModal'
import { ContextAPI } from '../store/UserContext'


const UserItem = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [modalState, setModalState] = useState(false)

    const { fetchUser } = useContext(ContextAPI)



    useEffect(() => {
        (async () => {
            setLoading(true)
            const userData = await fetchUser()

            setUsers((prevUser) => [
                { userDetail: userData?.data && userData.data, key: Math.random().toString() }
                , ...prevUser
            ])
            setLoading(false)
        })()
    }, [fetchUser])




    return (
        <TouchableOpacity onPress={() => setModalState(true)}>

            <FlatList
                data={users[0]?.userDetail && users}
                renderItem={
                    ({ item: { userDetail, key } }) => (

                        <View>
                            {userDetail &&
                                < View style={styles.userContainer}>
                                    {
                                        loading
                                            ? <Text style={styles.loading}>Loading...</Text>
                                            : <>
                                                <Image
                                                    style={styles.avatar}
                                                    source={{
                                                        uri: userDetail?.avatar_url,
                                                    }}
                                                />
                                                <View style={styles.textContainer}>
                                                    <Text style={styles.username}> {userDetail.login}</Text>
                                                    <Text style={styles.url}>   {userDetail.url}</Text>
                                                </View>
                                            </>

                                    }
                                </View>}

                            < UserModal modalState={modalState} setModalState={setModalState} userDetail={userDetail} />
                        </View >
                    )
                }


            />



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
    },
    loading: {
        color: 'white',
        padding: 15,
        fontSize: 19,
    },
    test: {
        fontSize: 40,
    }
})
