import React, { useRef } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

import CustomTextInput from '@components/CustomTextInput';


export default ContactForm = ({ contact, handleChange }) => {


    const refFirstName = useRef();
    const refLastName = useRef();
    const refEmail = useRef();
    const refPhone = useRef();
    // onChangeText={(value) => onChangeText(name, value)}
    return (
        <View style={styles.container}>

            <Text style={styles.header} >Main Information</Text>
            <CustomTextInput 
                name={'firstName'} 
                title={'First Name'} 
                inputRef={refFirstName}
                inputFocus={refLastName} 
                input={contact.firstName} 
                onChangeInput={handleChange}
            />
            <CustomTextInput 
                name={'lastName'} 
                title={'Last Name'}  
                inputRef={refLastName} 
                inputFocus={refEmail} 
                input={contact.lastName} 
                onChangeInput={handleChange}
            />
            
            <Text style={styles.header} >Sub Information</Text>
            <CustomTextInput 
                name={'email'} 
                title={'Email'}  
                inputRef={refEmail} 
                inputFocus={refPhone} 
                input={contact.email} 
                onChangeInput={handleChange}
            />
            <CustomTextInput 
                name={'phone'} 
                title={'Phone'}  
                inputRef={refPhone} 
                input={contact.phone} 
                onChangeInput={handleChange}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontWeight: 'bold',
        backgroundColor: 'rgba(211, 211, 211, 0.2)',
        fontSize: 20,
        paddingHorizontal: 15,
        paddingVertical: 3,
        color: 'black'
    }
});