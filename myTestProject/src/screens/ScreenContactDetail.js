import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Avatar from '@components/Avatar';
import ContactForm from '@components/ContactForm';
import ModelContact from '@models/ModelContact';


const ScreenContactDetail = ({  navigation }) => {

    const { contactDetail } = navigation.state.params;
    // const initialValues = ModelContact.Model;
    const [ contact, setContact ] = useState(contactDetail);

    const onChangeValue = (name, value) => {
        setContact({...contact, [name]: value});
    }

    const saveContact = async() => {
        const stringifiedArray = await AsyncStorage.getItem('contact_list');
        const restoredArray = JSON.parse(stringifiedArray);
        const foundIndex = restoredArray.findIndex(x => x.id == contact.id);
        restoredArray[foundIndex] = contact;
        await AsyncStorage.setItem('contact_list', JSON.stringify(restoredArray));
    
        navigation.navigate('Contact')
    } 




    return  <ScrollView style={styles.container}>
            <Button title="save" onPress={saveContact}/>
                <View style={styles.avatarContainer}>
                    <Avatar size={14} />
                    <ContactForm contact={contact} handleChange={onChangeValue} />
                </View>
        </ScrollView>;
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },  
    avatarContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});

export default ScreenContactDetail;