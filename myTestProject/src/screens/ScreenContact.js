import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import contactList from '@assets/json/data.json';
import ModelContact from '@models/ModelContact';

const ScreenContact = () => {
   
    const DATA = contactList;
    const renderItem = ModelContact.renderContactItem("hello");



    return <View style={styles.container}>
       <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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