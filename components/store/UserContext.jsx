import React, { createContext, useReducer, useState } from 'react';
import { View, Text } from 'react-native'
import axios from 'axios'
import { reducer } from './UserReducer'


export const ContextAPI = createContext({});



export default function UserContextProvider({ children }) {
    const [state, dispatch] = useReducer(reducer)

    const searchHandler = (user) => {
        dispatch({
            type: 'FETCH_USER',
            payload: user,
        })
        fetchUser()
    }
    const fetchUser = async () => {

        let username = state
        if (username) {
            const user = await axios.get(`https://api.github.com/users/${username}`)
            return user
        }
    }



    return (
        <ContextAPI.Provider value={{ fetchUser, searchHandler }}>
            {children}
        </ContextAPI.Provider >
    )
}
