import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Avatar from '@components/Avatar';
import ContactForm from '@components/ContactForm';
import { StyleConstant } from '@assets/json/MyStyle';
import ModelContact from '@models/ModelContact';


const ScreenContactDetail = ({  navigation }) => {

    const { contactDetail } = navigation.state.params;
    const [ contact, setContact ] = useState(contactDetail);
    const [ headerBtnSave, setHeaderBtnSave ] = useState(false);

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

    useEffect(() => {
        navigation.setParams({
            setHeaderBtnSave,
        });
    },[])

    useEffect(() => {
        if (headerBtnSave) {
            saveContact();
            setHeaderBtnSave(false);
        }
    }, [headerBtnSave])
    


    return <ScrollView style={styles.container}>
            <View style={styles.avatarContainer}>
                <Avatar size={14} />
            </View>
            <ContactForm contact={contact} handleChange={onChangeValue} />
        </ScrollView>;
}


  ScreenContactDetail.navigationOptions = ({navigation}) => ({
    title: null,
    headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack() }>
            <Text style={styles.headerText}>Cancel</Text>
        </TouchableOpacity>
    ),
    headerRight: () => {
        const { setHeaderBtnSave } = navigation.state.params;
        return (
          <TouchableOpacity onPress={() => {
                setHeaderBtnSave(true);
            }}>
            <Text style={styles.headerText}>Save</Text>
          </TouchableOpacity>
        );
    },
  });


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
    headerText: {
        color: StyleConstant.orange,
        fontSize: 18,
        marginHorizontal: 15,
    }
});

export default ScreenContactDetail;