import React from 'react'
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#eee',
        height: 34,
        alignSelf: 'stretch',
        padding: 5,
    }
})

const input = () => {
    return(
        <TextInput style={styles.input}/>
    )
}

export default input