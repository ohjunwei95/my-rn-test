import React, { useState, useRef } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';


export default CustomTextInput = ({ title, name, input, onChangeInput, inputRef, inputFocus }) => {

    // const [input, setInput] = useState('');

    

    return <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>{title}</Text>
        <TextInput
            style={styles.input}
            onChangeText={(value) => onChangeInput(name, value)}
            value={input}
            returnKeyType="next"
            onSubmitEditing={() => {
                if(inputFocus) inputFocus.current.focus();
            }}
            blurOnSubmit={false}
            ref={inputRef}
        />
    </View>;
}

const styles = StyleSheet.create({
    inputContainer: { 
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        alignItems: 'stretch',
        height: 35,
        margin: 10,
        borderWidth: 1,
        padding: 10,
    },
    inputTitle: {
        marginHorizontal: 5,
        width: 70,
    }
});