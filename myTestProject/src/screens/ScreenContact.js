import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationEvents } from 'react-navigation';
import contactList from '@assets/json/data.json';
import ModelContact from '@models/ModelContact';

const ScreenContact = ({ navigation }) => {
   
    const DATA = contactList;
    const [ contactArr, setContactArr ] = useState([]);
    const [ refreshing, setRefreshing ] = useState(false);

    const renderItem = ModelContact.renderContactItem(navigation, 'ContactDetail');

    const setContactList = async () => {
        await AsyncStorage.setItem('contact_list', JSON.stringify(DATA));
        setContactArr(DATA);
    };

    const getContactList = async () => {
        const stringifiedArray = await AsyncStorage.getItem('contact_list');
        const restoredArray = JSON.parse(stringifiedArray);
        setContactArr(restoredArray);
    };

    useEffect(() => {
        setContactList();
    }, [])

    const onRefresh = () =>{
        setRefreshing(true);
        setContactList();
        setRefreshing(false);
    }

    return <View style={styles.container}>
        <NavigationEvents 
              onWillFocus={()=>{ 
                getContactList();
              }}
            />
       <FlatList
            data={contactArr}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            refreshing={refreshing} 
            onRefresh={onRefresh}
      />
    </View>;
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
    },
    
});

export default ScreenContact;