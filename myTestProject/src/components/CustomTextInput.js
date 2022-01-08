import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';


export default CustomTextInput = ({ title, name, input, onChangeInput, inputRef, inputFocus }) => {


    return (
        <View style={styles.inputContainer}>
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
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: { 
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        borderBottomWidth: 1,
        borderBottomColor:  'rgba(211, 211, 211, 0.5)',
    },
    input: {
        flex: 1,
        alignItems: 'stretch',
        height: 35,
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor:  'rgba(211, 211, 211, 0.5)',
        padding: 10,
    },
    inputTitle: {
        marginHorizontal: 5,
        width: 70,
    }
});